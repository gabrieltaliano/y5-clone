/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect, useState, FC } from "react";
import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db, storage } from "../../../../lib/firebase";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { TECHNOLOGIES_PATH, stack } from "./StackEditor";

export default function StackItem({ item }: { item?: stack | undefined }) {
  const [title, setTitle] = useState<string>(item?.title || "");
  const [category, setCategory] = useState<string>(
    item?.category || "SaaS / Applications"
  );
  const [description, setDescription] = useState<string>(
    item?.description || ""
  );
  const [imageURL, setImageURL] = useState(item?.imgURL);
  const [imageFile, setImageFile] = useState<File | undefined>();
  const [imageInput, setImageInput] = useState<string>("");

  const technologiesCollectionRef = collection(db, TECHNOLOGIES_PATH);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    setImageFile(event.target.files?.[0]);
    setImageInput(event.target.value);
  }

  const [preview, setPreview] = useState<string | undefined>();

  useEffect(() => {
    // create the preview
    let objectUrl: string = "";

    if (imageFile) {
      objectUrl = URL.createObjectURL(imageFile);
      setPreview(objectUrl);
    }

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [imageFile]);

  const handleUpload = (file: File) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `/technologies/${file.name}`);

      // progress can be paused and resumed. It also exposes progress updates.
      // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // const percent = Math.round(
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // );
        },
        (err) => {
          console.error(err);
          reject(err);
        },
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url: any) => {
            resolve({ url, imgRef: uploadTask.snapshot.ref.fullPath });
          });
        }
      );
    });
  };

  const handleAdd = async () => {
    if (!imageFile) {
      return;
    }
    const { url: imgURL, imgRef } = (await handleUpload(imageFile)) as {
      url: string;
      imgRef: string;
    };

    console.log({ imgURL });
    if (!imgURL) {
      return;
    }
    await addDoc(technologiesCollectionRef, {
      title,
      description,
      category,
      imgURL,
      imgRef,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        setTitle("");
        setDescription("");
        setImageURL(undefined);
        setPreview(undefined);
        setImageInput("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = async ({
    id,
    imgRef,
  }: {
    id: string;
    imgRef: string;
  }) => {
    const documentRef = doc(db, TECHNOLOGIES_PATH, id);

    await deleteDoc(documentRef)
      .then(() => {
        console.log("Deleted!");
      })
      .catch((error) => {
        console.error(error);
      });
    await deleteObject(ref(storage, imgRef));
  };

  return (
    <div className="flex flex-col border border-slate-500 rounded-lg bg-slate-100 text-slate-900 justify-center items-center p-2 w-fit gap-4">
      {item?.id ? (
        <>
          <h2 className="uppercase font-bold text-lg">{item.title}</h2>
          <label className="leading-4 text-sm text-slate-600">
            {item.description}
          </label>
          <h3 className="text-sm font-bold">{item.category}</h3>
          <img className="h-48 w-fit" src={item.imgURL} alt="preview" />
          <button
            className="font-bold text-xs bg-red-900 rounded-md border border-red-950 text-white p-1"
            onClick={() => handleDelete({ id: item.id, imgRef: item.imgRef })}
          >
            Delete
          </button>
        </>
      ) : (
        <>
          {" "}
          <input
            className="text-black bg-white w-full"
            type="text"
            autoComplete="off"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="text-black bg-white w-full"
            type="text"
            autoComplete="off"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="text-black bg-white w-full"
            type="text"
            autoComplete="off"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {preview && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="h-48 w-fit"
              src={preview}
              alt="preview"
              onClick={() => {
                setPreview(undefined);
                setImageInput("");
              }}
            />
          )}
          {imageURL && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="h-48 w-fit" src={imageURL} alt="preview" />
          )}
          <input
            type="file"
            value={imageInput}
            onChange={(e) => handleImageChange(e)}
            accept="/image/*"
          />
          <button
            className="disabled:text-gray-700 bg-green-400 text-black border-green-700 cursor-pointer rounded-md p-2 w-20"
            disabled={!imageFile || !title || !description}
            onClick={handleAdd}
          >
            Add
          </button>
        </>
      )}
    </div>
  );
}

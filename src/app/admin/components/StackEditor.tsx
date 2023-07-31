import React, { useRef, useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../../../../lib/firebase";
import StackItem from "./StackItem";

export interface stack {
  id: string;
  title: string;
  description: string;
  category: string;
  imgURL: string;
  imgRef: string;
  createdAt: Date;
}
export const TECHNOLOGIES_PATH = "technologies";

export default function StackEditor() {
  const [stack, setStack] = useState<stack[]>([]);

  const collectionRef = useRef(collection(db, TECHNOLOGIES_PATH));

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef.current, (querySnapshot) => {
      let dataArray: stack[] = [];
      querySnapshot.forEach((doc) => {
        const { title, description, imgURL, imgRef, createdAt, category } =
          doc.data();
        dataArray.push({
          title,
          description,
          category,
          imgURL,
          imgRef,
          id: doc.id,
          createdAt: new Date(createdAt),
        });
      });
      setStack(dataArray);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="flex flex-col w-full items-center gap-4">
      <h1 className="text-3xl font-bold text-slate-400">StackEditor</h1>

      <StackItem />
      <div className="grid grid-cols-5 gap-1">
        {stack
          .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))
          .map((stackItem) => (
            <StackItem key={stackItem.id} item={stackItem} />
          ))}
      </div>
    </section>
  );
}

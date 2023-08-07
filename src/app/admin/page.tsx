"use client";
import React, { useEffect, useState } from "react";
import { auth } from "../../../lib/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import StackEditor from "./components/StackEditor";

export default function Page() {
  const [user, setUser] = useState<string | undefined>();

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: "select_account" });

  const googleSignIn = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((user) => {
        console.log("Login success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOutUser = async () => {
    await signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.error("There was an error signing out", error);
      });
  };

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  const SignOut = () => (
    <div className="w-screen flex flex-col justify-center items-end p-8 text-black">
      <button onClick={signOutUser}>Sign Out</button>
      <StackEditor />
    </div>
  );

  const SignIn = () => (
    <div className="w-screen h-screen flex flex-col justify-center items-center p-8 text-black gap-8">
      <div>Admin access required</div>
      <button className="border border-black p-2 w-28 rounded" onClick={googleSignIn}>SIGN IN</button>
    </div>
  );

  return user ? <SignOut /> : <SignIn />;
}

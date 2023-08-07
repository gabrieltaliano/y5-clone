This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## DataBase

This project use Firebase Firestore database. You should create a firebase project in your console first:

- [Firebase Console](https://console.firebase.google.com/) - Create a new project.


Then, copy your firebase configuration in the `lib/firebase.js` file. For example:

```js
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_firebaseApiKey,
  authDomain: "y5-clone.firebaseapp.com",
  projectId: "y5-clone",
  storageBucket: "y5-clone.appspot.com",
  messagingSenderId: "484478177315",
  appId: "1:484478177315:web:a427320c69df7a0188a196",
}
```

### Important

Save the `apiKey` value as env variable to keep it safe.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

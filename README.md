[![Node.js CI](https://github.com/gabrieltaliano/y5-clone/actions/workflows/node.js.yml/badge.svg)](https://github.com/gabrieltaliano/y5-clone/actions/workflows/node.js.yml)

# Based on the Y5 site
<img src='https://github.com/gabrieltaliano/y5-clone/assets/11794735/8958b078-1eb5-4774-aa21-5557903e8670' width="280" height="280" />

<https://y5.nz/>

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

## Online demo

Hosted on vercel [here](https://y5-clone-gabrieltaliano.vercel.app/)

## Admin tool

Added a utility route to manage the technology list shown on the site.

- [Admin console](https://y5-clone-gabrieltaliano.vercel.app/admin)
- [Technology section](https://y5-clone-gabrieltaliano.vercel.app/technologies)

## DataBase

This project uses Firebase Firestore database. You should create a firebase project in your console first:

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
};
```

### Important

Save the `apiKey` value as env variable to keep it safe.

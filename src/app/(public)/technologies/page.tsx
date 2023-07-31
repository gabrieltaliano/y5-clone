import { DocumentData, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import TechnologyItem from "./components/TechnologyItem";
import { stack } from "@/app/admin/components/StackEditor";

const getTechnologies = async () => {
  const collectionRef = collection(db, "technologies");
  const collectionQuery = query(collectionRef);
  const querySnapshot = await getDocs(collectionQuery);

  const res: stack[] = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    res.push(data as stack);
  });
  return res;
};

export default async function Technologies() {
  const technologies: stack[] = await getTechnologies();

  return (
    <div className="grid grid-cols-5 mt-24 p-16 text-black">
      {technologies.map((technology: stack) => (
        <TechnologyItem technology={technology} key={technology.id} />
      ))}
    </div>
  );
}

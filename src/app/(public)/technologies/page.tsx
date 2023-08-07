import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import { stack } from "@/app/admin/components/StackEditor";
import Category from "./components/Category";

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

  const categories = technologies.reduce((prev: string[], current: stack) => {
    if (!prev.includes(current.category)) {
      return [...prev, current.category];
    } else {
      return prev;
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-24 gap-16 py-16 text-black">
      {categories.map((category, categoryIndex) => (
        <Category
          key={`category-${category}`}
          technologies={technologies}
          category={category}
          categoryIndex={categoryIndex}
        />
      ))}
    </div>
  );
}

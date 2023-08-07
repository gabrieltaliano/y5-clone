import { stack } from "@/app/admin/components/StackEditor";
import TechnologyItem from "./TechnologyItem";
import LoopCartel from "@/components/LoopCartel";
import { chunk } from "lodash";

export default function Category({
  technologies,
  category,
  categoryIndex,
}: {
  technologies: stack[];
  category: string;
  categoryIndex: number;
}) {
  const techStack = technologies.filter(
    (technology) => technology.category === category
  );
  const techGroups =
    techStack.length > 8
      ? chunk(techStack, Math.ceil(techStack.length / 2))
      : [techStack];

  return (
    <div className="w-full overflow-hidden flex flex-col items-center gap-12">
      <h2 className="text-2xl uppercase font-bold">{category}</h2>
      <LoopCartel inverted={categoryIndex % 2 === 0}>
        {techGroups[0].map((technology: stack) => (
          <TechnologyItem technology={technology} key={technology.id} />
        ))}
      </LoopCartel>
      {techGroups[1] && (
        <LoopCartel inverted={categoryIndex % 2 !== 0}>
          {techGroups[1].map((technology: stack) => (
            <TechnologyItem technology={technology} key={technology.id} />
          ))}
        </LoopCartel>
      )}
    </div>
  );
}

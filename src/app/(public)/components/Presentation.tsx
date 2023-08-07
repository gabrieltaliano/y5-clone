import Legend from "./Legend";

export default function Presentation() {
  return (
    <div className="bg-black/70 backdrop-blur-lg w-full z-10 h-screens">
      <Legend
        text="Tackle the most challenging problems and create data rich systems that
        are easy to use."
      />
      <div className="w-fit max-w-6xl text-center gap-4 grid grid-cols-1 m-auto p-32">
        <label className="text-lg font-bold mb-8">
          At Y5 we prioritize long term success.
        </label>
        <label>
          While there are quick wins to be had, we believe resilient, long term
          thinking rewards the people we work with.
        </label>
        <label>
          We embrace lean principles - eliminate waste, 5S, kaizen and asking
          “Why?” five times to get to the root cause of a problem.
        </label>
        <label>
          We prioritize reducing friction, making sure we are able to act with
          intent without distraction. By focusing on the way we work we are able
          to increase productivity. Our environment, office and culture promote
          an anything-is-possible atmosphere and a commitment to carry an idea
          to it’s conclusion.
        </label>
        <label>
          We’re intentionally a few minutes out of town in the old Matangi Dairy
          Factory - home to an eclectic mix of businesses and the birthplace of
          many great companies.
        </label>
        <label>
          We travel and arrive at a place that straddles old and new. By
          creating space we prime ourselves for creative endeavours.
        </label>
      </div>
    </div>
  );
}

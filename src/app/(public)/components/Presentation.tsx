export default function Presentation() {
  return (
    <div className="bg-black/80 backdrop-blur-lg w-full p-24 z-10">
      {/* <div className="w-full text-center gap-4 grid-rows-4 grid-flow-col grid h-[40vh]"> */}
      <div className="w-full text-center gap-4 flex flex-wrap flex-col h-[40vh]">
        <label className="max-w-lg">
          1 At Y5 we prioritize long term success.
        </label>
        <label className="max-w-lg">
          2 While there are quick wins to be had, we believe resilient, long
          term thinking rewards the people we work with.
        </label>
        <label className="max-w-lg">
          3 We embrace lean principles - eliminate waste, 5S, kaizen and asking
          “Why?” five times to get to the root cause of a problem.
        </label>
        <label className="max-w-lg">
          4 We prioritise reducing friction, making sure we are able to act with
          intent without distraction. By focusing on the way we work we are able
          to increase productivity. Our environment, office and culture promote
          an anything-is-possible atmosphere and a commitment to carry an idea
          to it’s conclusion.
        </label>
        <label className="max-w-lg">
          5 We’re intentionally a few minutes out of town in the old Matangi
          Dairy Factory - home to an eclectic mix of businesses and the
          birthplace of many great companies.
        </label>
        <label className="max-w-lg">
          6 We travel and arrive at a place that straddles old and new. By
          creating space we prime ourselves for creative endeavours.
        </label>
      </div>
    </div>
  );
}

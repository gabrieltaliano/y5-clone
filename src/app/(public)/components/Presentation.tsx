export default function Presentation() {
  return (
    <div className="bg-black/80 backdrop-blur-lg w-full z-10  pb-24">
      {/* <div className="w-full text-center gap-4 grid-rows-4 grid-flow-col grid h-[40vh]"> */}
      <div className="w-fit text-center gap-4 grid grid-cols-1  max-h-[40vh] m-auto p-12">
        <label className="max-w-lg">
          At Y5 we prioritize long term success.
        </label>
        <label className="max-w-lg">
          While there are quick wins to be had, we believe resilient, long term
          thinking rewards the people we work with.
        </label>
        <label className="max-w-lg">
          We embrace lean principles - eliminate waste, 5S, kaizen and asking
          “Why?” five times to get to the root cause of a problem.
        </label>
        <label className="max-w-lg">
          We prioritise reducing friction, making sure we are able to act with
          intent without distraction. By focusing on the way we work we are able
          to increase productivity. Our environment, office and culture promote
          an anything-is-possible atmosphere and a commitment to carry an idea
          to it’s conclusion.
        </label>
        <label className="max-w-lg">
          We’re intentionally a few minutes out of town in the old Matangi Dairy
          Factory - home to an eclectic mix of businesses and the birthplace of
          many great companies.
        </label>
        <label className="max-w-lg">
          We travel and arrive at a place that straddles old and new. By
          creating space we prime ourselves for creative endeavours.
        </label>
      </div>
    </div>
  );
}

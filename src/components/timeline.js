import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";

export default function Timeline() {
  return (
    <div className="container col-span-2">
      <p>I am the timeline!</p>
      {/* {!photos ? (
        <Skeleton count={4} width={640} height={500} className="mb-5" />
      ) : null} */}
    </div>
  );
}

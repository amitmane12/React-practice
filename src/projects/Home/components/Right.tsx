import RightCardContent from "./RightCardContent";
import type { itemType } from "./types";

const Right = ({ id, img, butnTag }: itemType) => {
  return (
    <div className="relative h-full w-full max-w-80 shrink-0 overflow-hidden rounded-4xl ">
      <img className=" h-full w-full object-cover " src={img} alt="image" />
      <RightCardContent butnTag={butnTag} id={id} />
    </div>
  );
};

export default Right;

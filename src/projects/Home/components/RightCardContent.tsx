import { ArrowRight } from "lucide-react";
// import type { cardType } from "../../project1/types/card.types";

const RightCardContent = ({ butnTag, id }: { butnTag: string; id: number }) => {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-between  h-full p-6">
      <div>
        <h1
          className="text-4xl 
        font-semibold 
        rounded-full 
        bg-transparent
         border-gray-100 
         border-2 
         h-12 w-12
          flex 
          items-center
           justify-center"
        >
          {id}
        </h1>
      </div>
      <div>
        <p className="mb-10 text-xl font-semibold ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio
          aliquam quam a porro consequatur animi quidem enim corrupti nihil!
        </p>
        <div className="flex justify-around lg:px-10 lg:py-2  lg:overflow-hidden">
          <button className="font-bold text-2xl  px-10 py-2 rounded-full bg-black text-blue-600 ">
            {butnTag}
          </button>
          <button className="  px-4 py-2 bg-black text-blue-600 rounded-full">
            <ArrowRight size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;

import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div className=" w-1/3  flex flex-col justify-between px-2 py-10 border  rounded-2xl overflow-hidden">
      <div className="flex flex-col gap-4">
        <h2 className="text-6xl font-bold tracking-[1.1] px-4">
          Prospective <br />{" "}
          <span className="px-5 text-gray-500">customer</span> <br />
          segmentation
        </h2>
        <p className="text-2xl text-gray-800 tracking-wider px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          vitae maiores! Reprehenderit, nam quae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>
      <div>
        <ArrowUpRight size={60} strokeWidth={3} />
      </div>
    </div>
  );
};

export default LeftContent;

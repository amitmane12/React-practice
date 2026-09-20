import { ArrowUpRight } from "lucide-react";

const LeftContent = () => {
  return (
    <div
      className="
        w-full lg:w-1/3
        min-h-100 lg:min-h-full
        flex flex-col justify-between
        px-4 sm:px-6 lg:px-2
        py-8 sm:py-10
         rounded-2xl
        overflow-hidden
      "
    >
      <div className="flex flex-col gap-4">
        <h2
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            tracking-tight
            px-2 sm:px-4
          "
        >
          Prospective <br />
          <span className="px-2 sm:px-5 text-gray-500">customer</span> <br />
          segmentation
        </h2>

        <p
          className="
            text-base
            sm:text-lg
            lg:text-2xl
            text-gray-800
            tracking-wide
            px-2 sm:px-4
            leading-relaxed
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sint
          vitae maiores! Reprehenderit, nam quae. Lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
      </div>

      <div className="px-2 sm:px-4 mt-8 lg:mt-0">
        <ArrowUpRight
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15"
          strokeWidth={3}
        />
      </div>
    </div>
  );
};

export default LeftContent;

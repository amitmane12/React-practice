import Right from "./Right";
import cardData from "../../../data";

const RightContent = () => {
  return (
    <div className="relative flex h-full w-full flex-col lg:justify-around  sm:flex-row sm:flex-wrap lg:w-2/3 ">
      {/* <Right />
      <Right />
      <Right /> */}
      {cardData.map((item) => (
        <Right {...item} />
      ))}
    </div>
  );
};

export default RightContent;

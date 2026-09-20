import LeftContent from "./LefttContent";
import RightContent from "./RightContent";

const Main = () => {
  return (
    <div className="h-[80vh] w-full flex justify-between items-center  p-10 bg-[#212121]  flex-col lg:flex-row gap-4">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Main;

import LeftContent from "./LefttContent";
import RightContent from "./RightContent";

const Main = () => {
  return (
    <div className="h-[80vh] w-full flex justify-between p-10  gap-1 bg-[#212121]">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Main;

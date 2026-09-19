import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1 = () => {
  return (
    <div className=" px-10 py-4 h-[80vh] bg-amber-200 flex gap-5">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Page1;

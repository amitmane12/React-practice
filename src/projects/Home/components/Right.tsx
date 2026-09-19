import RightCardContent from "./RightCardContent";

const Right = () => {
  return (
    <div>
      <div className="relative h-full overflow-hidden rounded-2xl">
        <img
          className="h-full w-full  rounded-2xl"
          src="https://img.magnific.com/premium-photo/anime-girl-business-suit-holding-phone-office_591846-5568.jpg?semt=ais_hybrid&w=740&q=80"
          alt="image"
        />
        <RightCardContent />
      </div>
    </div>
  );
};

export default Right;

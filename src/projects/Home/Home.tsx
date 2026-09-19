import Main from "./components/Main";
import Navbar from "./components/Navbar";

const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col ">
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;

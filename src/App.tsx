import "./App.css";
import Card from "./components/Card";
// import googleIcon from "./assets/google.png";
import reactIcon from "./assets/react.svg";
import users from "./components/data";

function App() {
  return (
    <div className="container">
      {users.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
}

export default App;

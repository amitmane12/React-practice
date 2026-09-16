import "./App.css";
import Card from "./components/Card";
import googleIcon from "./assets/google.png";
import reactIcon from "./assets/react.svg";
function App() {
  return (
    <div className="container">
      <Card
        companyName="Amazon"
        position="Senior UI/UX Designer"
        rate="200-250"
        location="Banglore, India"
        icon={reactIcon}
      />
      <Card
        companyName="Google"
        position="Senior UI/UX Designer"
        rate="200-250"
        location="Banglore, India"
        icon={googleIcon}
      />
    </div>
  );
}

export default App;

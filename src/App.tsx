import "./App.css";
import Card from "./components/Card";
import users from "./components/data";

function App() {
  return (
    <div className="container">
      {users.map((item, idx) => (
        <div key={idx}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
}

export default App;

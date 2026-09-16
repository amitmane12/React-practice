import { Bookmark } from "lucide-react";
import reactIcon from "../assets/react.svg";
import "../App.css";
// import type { cardType } from "../types/card.types";

const Card = () => {
  return (
    <div className="container">
      <div className="parent">
        <div className="top">
          <div className="top1">
            <img src={reactIcon} alt="react Icon" />
            <button>
              Save <Bookmark />{" "}
            </button>
          </div>
          <div className="top2">
            <div className="companyTag">
              <h3>Amazon</h3>
              <span>5 days ago</span>
            </div>
            <h2>Senior UI/UX Designer</h2>
            <div className="tags">
              <span>Part time</span>
              <span>Senior Level</span>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bleft">
            <h3>$200-250k</h3>
            <p>Banglore, India</p>
          </div>
          <div className="bright">
            <button>Apply now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { Bookmark } from "lucide-react";
import "../App.css";
import type { cartPropType } from "../types/ctype";

const Card = ({
  companyName,
  position,
  rate,
  location,
  icon,
}: cartPropType) => {
  console.log(companyName);
  return (
    <div className="parent">
      <div className="top">
        <div className="top1">
          <img src={icon} alt="icon" />
          <button className="save-btn">
            Save <Bookmark className="save-icon" />{" "}
          </button>
        </div>
        <div className="top2">
          <div className="companyTag">
            <h3>{companyName}</h3>
            <span>5 days ago</span>
          </div>
          <h2>{position}</h2>
          <div className="tags">
            <span>Part time</span>
            <span>Senior Level</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bleft">
          <h3>${rate}k</h3>
          <p>{location}</p>
        </div>
        <div className="bright">
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

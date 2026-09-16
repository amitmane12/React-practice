import { Bookmark } from "lucide-react";
import type { cartPropType } from "./types/cartPropType";
import styles from "./Card.module.css";

const Card = ({
  companyName,
  position,
  rate,
  location,
  icon,
}: cartPropType) => {
  // console.log(companyName);
  return (
    <div className={styles.parent}>
      <div className={styles.top}>
        <div className={styles.top1}>
          <img src={icon} alt="icon" />
          <button className={styles.saveBtn}>
            Save <Bookmark className={styles.saveIcon} />{" "}
          </button>
        </div>
        <div className={styles.top2}>
          <div className={styles.companyTag}>
            <h3>{companyName}</h3>
            <span>5 days ago</span>
          </div>
          <h2>{position}</h2>
          <div className={styles.tags}>
            <span>Part time</span>
            <span>Senior Level</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bleft}>
          <h3>${rate}k</h3>
          <p>
            {location.city}, {location.country}
          </p>
        </div>
        <div className={styles.bright}>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

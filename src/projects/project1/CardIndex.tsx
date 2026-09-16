import users from "./data";
import Card from "./Card";
import styles from "./Card.module.css";
const CardIndex = () => {
  return (
    <div>
      <div className={styles.container}>
        {users.map((item, idx) => (
          <div key={idx}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardIndex;

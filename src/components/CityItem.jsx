import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { cityName, date, emoji } = city;
  console.log(city);

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time datetime="" className={styles.date}>
        {formatDate(date)}
      </time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;

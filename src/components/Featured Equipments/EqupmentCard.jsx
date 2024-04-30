import { Link } from "react-router-dom";
import images from "../../utils/Images";
import styles from "./style.module.css";

const EquipmentCard = ({ item }) => {
  return (
    <div className={styles.readDetailsCard}>
      <div className={styles.readDetailsCardRow}>
        <div className={styles.readDetailsCardRowRight}>
          <img className={styles.cardLocationImg} src={images.location} />
          <div className={styles.cardLocationText}>{item.location}</div>
        </div>
        <div className={styles.cardTextBold}>
          Rs {item.price.toLocaleString()}
        </div>
      </div>
      <div className={styles.readDetailsCardRow}>
        <div className={styles.cardTextBold}>{item.equipment_name}</div>
        <div className={styles.cardDayText}>per day</div>
      </div>
      <img className={styles.cardImage} src={item.images[0]} />
      <div className="flex flex-row justify-around">
        <div>
          <p className="text-[#fcb63a] sm:text-[16px] text-[14px] font-semibold">
            Make
          </p>
          <p className="text-[#000] sm:text-[12px] text-[12px] font-semibold">
            {item.make}
          </p>
        </div>
        <img className="w-[0.5px]" src={images.line} alt="line" />
        <div>
          <p className="text-[#fcb63a] sm:text-[16px] text-[14px] font-semibold">
            Model
          </p>
          <p className="text-[#000] sm:text-[12px] text-[12px] font-semibold">
            {item.model}
          </p>
        </div>
        <img className="w-[0.5px]" src={images.line} alt="line" />
        <div>
          <p className="text-[#fcb63a] sm:text-[16px] text-[14px] font-semibold">
            Year
          </p>
          <p className="text-[#000] sm:text-[12px] text-[12px] font-semibold">
            {item.year}
          </p>
        </div>
      </div>
      <Link to={`/equipment/details/${item._id}`}>
        <div className={styles.readDetailsBtn}>EXPLORE</div>
      </Link>
    </div>
  );
};

export default EquipmentCard;

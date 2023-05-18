import Styles from "./SectionTitle.module.scss";

const SectionTitle = ({ children }) => {
  return (
    <div className={Styles["section__title-wrap"]}>
      <h2 className={Styles["section__title"]}>{children}</h2>
      <div className={Styles["section__line"]}></div>
    </div>
  );
};

export default SectionTitle;

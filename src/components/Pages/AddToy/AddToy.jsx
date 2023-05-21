import AddToyForm from "../../AddToyForm/AddToyForm";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Styles from "./AddToy.module.scss";

const AddToy = () => {
  return (
    <section className={`${Styles["addToy"]} container`}>
      <div className={Styles["addToy__wrap"]}>
        <SectionTitle className={{ className: `${Styles["addToy__title"]}` }}>
          Add A Toy
        </SectionTitle>

        <div className={Styles["addToy__form"]}>
          <AddToyForm>Add A Toy</AddToyForm>
        </div>
      </div>
    </section>
  );
};

export default AddToy;

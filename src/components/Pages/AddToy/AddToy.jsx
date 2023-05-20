import AddToyForm from "../../AddToyForm/AddToyForm";
import Styles from "./AddToy.module.scss";

const AddToy = () => {
  return (
    <section className={`${Styles["addToy"]} container`}>
      <div className={Styles["addToy__wrap"]}>
        <AddToyForm />
      </div>
    </section>
  );
};

export default AddToy;

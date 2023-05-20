import { useContext } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Styles from "./AddToyForm.module.scss";
import { AuthContext } from "../../context/AuthProvider";
import useFetch from "../../hooks/useFetch";
import Swal from "sweetalert2";

const AddToyForm = ({ info, children }) => {
  const { user, error, setError } = useContext(AuthContext);

  const handleAddToyForm = async (e) => {
    e.preventDefault();

    const form = e.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const toyPicture = form.toyPicture.value;
    const toyName = form.toyName.value;
    const subCategory = form.subCategory.value;
    const price = form.toyPrice.value;
    const ratings = form.toyRatings.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;

    const addToyInfo = {
      sellerName,
      sellerEmail,
      toyPicture,
      toyName,
      subCategory,
      price,
      ratings,
      availableQuantity,
      description,
    };

    try {
      const res = await useFetch(`toys`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addToyInfo),
      });
      if (res) Swal.fire("Successfully Added A New Toy!");
      console.log(res);
      form.reset();
    } catch (err) {
      Swal.fire(`${err.message}`);
      setError(err.message);
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleAddToyForm} className={Styles["form"]}>
        {error && <p className="error-message">{error}</p>}
        <div className={Styles["form__input"]}>
          <Input
            inputObj={{
              type: "text",
              placeholder: "Seller Name",
              name: "sellerName",
              defaultValue: `${user.displayName}`,
              disabled: true,
            }}
          />
        </div>

        <div className={Styles["form__input"]}>
          <Input
            inputObj={{
              type: "text",
              placeholder: "Seller Email",
              name: "sellerEmail",
              defaultValue: `${user.email}`,
              disabled: true,
            }}
          />
        </div>

        <div className={Styles["form__input"]}>
          <Input
            inputObj={{
              type: "text",
              placeholder: "Picture URL",
              name: "toyPicture",
              defaultValue: `${info?.toyPicture || ""}`,
            }}
          />
        </div>

        <div className={Styles["form__input"]}>
          <Input
            inputObj={{
              type: "text",
              placeholder: "Toy Name",
              name: "toyName",
              required: true,
              defaultValue: `${info?.toyName || ""}`,
            }}
          />
        </div>

        <select
          className={`${Styles["form__select"]} ${Styles["form__input"]}`}
          name="subCategory"
          id="subCategory"
          defaultValue={info?.subCategory || "Select Sub-Category"}
        >
          <option disabled>Select Sub-Category</option>
          <option value="Racing Cars">Racing Cars</option>
          <option value="Convertible Cars">Convertible Cars</option>
          <option value="Monster Trucks">Monster Trucks</option>
        </select>

        <div className={Styles["form__input"]}>
          <Input
            inputObj={{
              type: "text",
              placeholder: "Toy Price",
              name: "toyPrice",
              required: true,
              defaultValue: `${info?.toyPrice || ""}`,
            }}
          />
        </div>

        <div className={Styles["form__input"]}>
          <Input
            inputObj={{
              type: "text",
              placeholder: "Toy Rating",
              name: "toyRatings",
              defaultValue: `${info?.toyRatings || ""}`,
            }}
          />
        </div>

        <div className={Styles["form__input"]}>
          <Input
            inputObj={{
              type: "number",
              placeholder: "Available quantity",
              name: "availableQuantity",
              required: true,
              defaultValue: `${info?.availableQuantity || ""}`,
            }}
          />
        </div>

        <textarea
          className={`${Styles["form__textarea"]} ${Styles["form__input"]}`}
          name="description"
          id=""
          cols="20"
          rows="6"
          placeholder="Toy's Detail Description"
          defaultValue={info?.description || ""}
        ></textarea>

        <Button
          btnObj={{ type: "submit" }}
          className={{ className: Styles["form__btn"] }}
        >
          {children}
        </Button>
      </form>
    </>
  );
};

export default AddToyForm;

import Styles from "./Blog.module.scss";
import Card from "../../../UI/Card/Card";

const Blog = ({ blog }) => {
  const { id, question, answer } = blog;
  return (
    <>
      <Card className={{ className: `${Styles["blog"]}` }}>
        <h2 className={Styles["blog__question"]}>
          <span>Q{id}:</span> {question}
        </h2>
        <p className={Styles["blog__answer"]}>
          <span>Ans:</span> {answer}
        </p>
      </Card>
    </>
  );
};

export default Blog;

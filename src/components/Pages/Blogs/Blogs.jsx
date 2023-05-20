import Blog from "./Blog/Blog";
import Styles from "./Blogs.module.scss";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const { blogs } = useLoaderData();
  console.log(blogs);

  return (
    <section className={`${Styles["blogs"]} container`}>
      <div className={Styles["blogs__wrap"]}>
        <div className={Styles["blogs__title-wrap"]}>
          <h2 className={Styles["blogs__title"]}>Our Blogs</h2>
          <div className={Styles["blogs__line"]}></div>
        </div>

        <div className={Styles["blogs__content"]}>
          {blogs.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;

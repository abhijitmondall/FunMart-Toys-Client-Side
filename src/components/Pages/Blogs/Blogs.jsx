import PageTitle from "../../PageTitle/PageTitle";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Blog from "./Blog/Blog";
import Styles from "./Blogs.module.scss";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const { blogs } = useLoaderData();

  return (
    <section className={`${Styles["blogs"]} container`}>
      <PageTitle>FunMart Toys | Blogs</PageTitle>

      <div className={Styles["blogs__wrap"]}>
        <SectionTitle className={{ className: `${Styles["blogs__title"]}` }}>
          Our Blogs
        </SectionTitle>

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

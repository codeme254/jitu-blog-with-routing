import Header from "../Components/Header";
import BlogPreview from "../Components/BlogPreview";
import Footer from "../Components/Footer";
import blogger from "../assets/blogger.jpeg";

const MoreBlogs = () => {
  return (
    <>
      <Header />
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>
        More blogs
      </h2>
      <BlogPreview
        image={blogger}
        author="dennis otwoma"
        date="18th May 2023"
        title="becoming a better developer"
        previewText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi suscipit soluta vero voluptates ipsum possimus tempore rerum eius mollitia repudiandae esse nostrum, dolorem amet ut laborum optio doloremque praesentium aliquam?"
        linkToFull="/becoming-a-better-developer"
      />

      <BlogPreview
        image={blogger}
        author="dennis otwoma"
        date="18th May 2023"
        title="becoming a better developer"
        previewText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi suscipit soluta vero voluptates ipsum possimus tempore rerum eius mollitia repudiandae esse nostrum, dolorem amet ut laborum optio doloremque praesentium aliquam?"
        linkToFull="/becoming-a-better-developer"
      />

      <BlogPreview
        image={blogger}
        author="dennis otwoma"
        date="18th May 2023"
        title="becoming a better developer"
        previewText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi suscipit soluta vero voluptates ipsum possimus tempore rerum eius mollitia repudiandae esse nostrum, dolorem amet ut laborum optio doloremque praesentium aliquam?"
        linkToFull="/becoming-a-better-developer"
      />
      <Footer />
    </>
  );
};
export default MoreBlogs;

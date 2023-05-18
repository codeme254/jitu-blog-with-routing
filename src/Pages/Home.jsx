import Header from "../Components/Header";
import BlogPreview from "../Components/BlogPreview";
import Next from "../Components/Next";
import Footer from "../Components/Footer";
import blogger from "../assets/blogger.jpeg";
const Home = () => {
  return (
    <>
      <Header />
      <section className="home">
        <div className="home__blogs-previews">
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
        </div>

        <div className="sidebar">
          <h2>Coming up</h2>
          <Next image={blogger} title="Becoming a better developer" link="/becoming-a-better-developer" />
          <Next image={blogger} title="Becoming a better developer" link="/becoming-a-better-developer" />
          <Next image={blogger} title="Becoming a better developer" link="/becoming-a-better-developer" />
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;

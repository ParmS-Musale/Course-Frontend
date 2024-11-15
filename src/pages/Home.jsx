
import Navbar from "../components/Navbar";
import CourseList from "./CourseList";

const Home = () => {
 
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          Welcome to the Course Management System 🕮
        </h1>
      </div>

      {/* Flex container to wrap the cards */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
       <CourseList/>
      </div>
    </>
  );
};

export default Home;

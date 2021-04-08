import React, { useState } from "react";
import Course from "./Course";

const AllCourses = () => {
  const [courses, setcourses] = useState([
    { title: "Java Course", description: "This is Java Course for Begginers." },
    {
      title: "Python Course",
      description: "This is Python Course for Begginers.",
    },
    {
      title: "Django Course",
      description: "This is Django Course for Begginers.",
    },
    {
      title: "Reactjs Course",
      description: "This is Reactjs Course for Begginers.",
    },
    {
      title: "Angular Course",
      description: "This is Angular Course for Begginers.",
    },
    {
      title: "Nodejs Course",
      description: "This is Nodejs Course for Begginers.",
    },
    {
      title: "Php Course",
      description: "This is Php Course for Begginers.",
    },
  ]);

  return (
    <>
      <div className="text-center">
        <h2>All Courses.</h2>
        <p>All Courses are available here.</p>
      </div>

      {courses.length > 0
        ? courses.map((item) => <Course courses={item} />)
        : "No Course Available here."}
    </>
  );
};
export default AllCourses;

import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Input, Button } from "reactstrap";
import { toast, ToastContainer, toastify } from "react-toastify";

function Menus() {
  const SearchBtn = () => {
    toast.success("Demo Search.", {
      position: "top-center",
    });
  };
  return (
    <>
      <div>
        <Input
          type="text"
          nama="Sesrch"
          placeholder="Search"
          style={{ width: 273, float: "left", marginRight: 2 }}
        />
        <Button color="success" outline onClick={SearchBtn}>
          Search
        </Button>
      </div>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/add-course"
          action
        >
          Add Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/view-courses"
          action
        >
          View Courses
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/about"
          action
        >
          About Us
        </Link>

        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/contact"
          action
        >
          Contact
        </Link>
      </ListGroup>
    </>
  );
}
export default Menus;

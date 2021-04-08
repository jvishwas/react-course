import React from "react";
import AllCourses from "./AllCourses";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

function Course({ courses }) {
  return (
    <>
      <Card className="text-center">
        <CardBody>
          <CardSubtitle className="font-weight-bold">
            {courses.title}
          </CardSubtitle>
          <CardText>{courses.description}</CardText>
          <Container className="text-center">
            <Button color="danger ml-3" outline>
              Delete
            </Button>
            <Button color="warning ml-3" outline>
              Update
            </Button>
          </Container>
        </CardBody>
      </Card>
    </>
  );
}
export default Course;

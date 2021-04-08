import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Container,
} from "reactstrap";

const AddCourse = () => {
  return (
    <>
      <h2 className="text-center my-3">Fill The Course Details</h2>
      <Form className="text-center ml-3 mr-3">
        <FormGroup>
          <Label for="user_id" className="font-weight-bold">
            Course Id:
          </Label>
          <Input
            type="text"
            placeholder="Enter your Courses ID"
            name="user_text"
            id="user_id"
          />
        </FormGroup>

        <FormGroup>
          <Label for="title_id" className="font-weight-bold">
            Course Title:
          </Label>
          <Input
            type="text"
            placeholder="Enter your Course Title.."
            name="title"
            id="title_id"
          />
        </FormGroup>

        <FormGroup>
          <Label for="description" className="font-weight-bold">
            Course Description:
          </Label>
          <Input
            type="textarea"
            placeholder="Enter Description here.."
            id="description"
            name="title"
            id="title_id"
            style={{ height: 200 }}
          />
        </FormGroup>
        <Container style={{ marginBottom: 30 }}>
          <Button color="success " outline>
            Add Course
          </Button>
          <Button color="warning " outline style={{ marginLeft: 30 }}>
            Clear Details
          </Button>
        </Container>
      </Form>
    </>
  );
};
export default AddCourse;

import React from "react";
import ReactDom from "react-dom";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import { Container, Row, Col, ListGroupItem } from "reactstrap";
import Header from "./components/Header";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/add-course" component={AddCourse} exact />
                <Route path="/view-courses" component={AllCourses} exact />
                <Route path="/about" component={AboutUs} exact />
                <Route path="/contact" component={ErrorPage} />
                <Route path="/*" component={ErrorPage} />
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;

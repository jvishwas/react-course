import ReactDom from "react-dom";
import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
  return (
    <>
      <Card className="my-2 " color="warning">
        <CardBody>
          <h1 className="text-center my-3">Welcome To TechnoGyan.</h1>
          <p className="text-center">
            This is Technology relatives site.You can gain knowladges of
            TechoWorld.
          </p>
        </CardBody>
      </Card>
    </>
  );
}
export default Header;

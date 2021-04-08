import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

function AboutUs() {
  return (
    <div>
      <Card className="mx-auto d-block">
        <CardImg
          top
          height="500"
          src={process.env.PUBLIC_URL + "/jaggu.jpg"}
          alt="Card image cap"
        />
        <CardBody>
          <h2>Welcome to About US.</h2>
          <CardTitle>
            <h3>Jagannath Vishwas</h3>
            <CardText>
              <h5>I created by own site.It's Demo site.</h5>
            </CardText>
          </CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}
export default AboutUs;

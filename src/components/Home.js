import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

function Home() {
  const btnHander = () => {
    toast.success("This is Demo a Message. Go To Your Course Options", {
      position: "top-center",
    });
  };
  return (
    <>
      <Jumbotron className="text-center">
        <h1>Learn Codes For Begginers..</h1>
        <p>
          Hey Guys are you looking for a best platform for learning. Dont warry
          about this, You can getting a best WebSite where you can get all
          realstict materials best Content,Syllbus and real practices...
        </p>
        <Button color="primary" outline onClick={btnHander}>
          Start Using
        </Button>
        <ToastContainer />
      </Jumbotron>
    </>
  );
}
export default Home;

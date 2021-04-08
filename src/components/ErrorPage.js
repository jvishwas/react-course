import React from "react";

function ErrorPage() {
  return (
    <>
      <div>
        <h1>
          <img
            src={process.env.PUBLIC_URL + "error_2.png"}
            width="100%"
            height="500"
          />
        </h1>
      </div>
    </>
  );
}
export default ErrorPage;

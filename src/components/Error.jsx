import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log("error--->", error);
  return (
    <>
      <h1>Opps!</h1>
      <h3>Something Went Error</h3>
    </>
  );
};

export default Error;

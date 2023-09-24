
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div  className="h-screen text-4xl flex flex-col justify-center items-center">
      <h2>
        opps..! THis page is not founded
      </h2>
      <br />
      <Link to="/">
        <button className="btn btn-primary  "> GO back to Home page</button>
      </Link>
    </div>
  );
};

export default Error;
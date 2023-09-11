import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="--center-all" style={{ minHeight: "80vh" }}>
      <h2>Page Not Found</h2>
      <p>Looks like the page you are looking for could not be found.</p>
      <br />
      <Link to={"/"}>
        <button className="--btn --btn-primary">Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFound;

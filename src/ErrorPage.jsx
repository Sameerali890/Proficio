import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="text-2xl font-bold">Are you lost??</div>
      <Link to="/">Back to home</Link>
    </>
  );
}

export default ErrorPage;

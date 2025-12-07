import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mt-16 mb-8 text-center">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className=" text-blue-600 hover:text-red-800 p-4 text-center"
      >
        <h3>Go back to Home</h3>
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        Sorry, the page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

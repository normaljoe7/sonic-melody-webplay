
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-spotify-base text-spotify-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 text-spotify-green">404</h1>
        <p className="text-2xl text-spotify-lightGray mb-8">Page not found</p>
        <a 
          href="/" 
          className="bg-spotify-green hover:bg-spotify-lightGreen text-black py-3 px-8 rounded-full font-bold transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

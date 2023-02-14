import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage: React.FC = () => {
  const error = useRouteError() as any;
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section
      id="error-page"
      className="flex flex-col flex-grow justify-center h-screen bg-pearl_bush"
    >
      <div className="text-center">
        <h1 className="text-5xl lg:text-9xl text-rock_blue">OOPS!</h1>
        <p className="text-xl lg:text-3xl font-thin my-5">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-eerie_black my-5">
          <i>{error.statusText || error.message}</i>
        </p>
        <button
          onClick={goBack}
          className="text-lg lg:text-xl font-light px-10 py-1 border-ochre_orange border-2 rounded-full hover:bg-ochre_orange hover:text-pearl_bush"
        >
          Go back
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;

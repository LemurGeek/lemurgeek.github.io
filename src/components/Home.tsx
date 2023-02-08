import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/about");
  };

  return (
    <main className="flex flex-col flex-grow justify-center h-[calc(100vh-56px)]">
      <div className="text-center">
        <h1 className="text-5xl lg:text-9xl text-rock_blue">HELLO THERE</h1>
        <h2 className="text-xl lg:text-3xl font-light my-10">
          I’m Marcello Calvo a Software Developer
        </h2>
        <button
          onClick={buttonHandler}
          className="text-lg lg:text-xl font-light px-10 py-1 border-ochre_orange border-2 rounded-full hover:bg-ochre_orange hover:text-pearl_bush"
        >
          See more
        </button>
      </div>
    </main>
  );
};

export default Home;

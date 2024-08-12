import { Button } from "flowbite-react";
import portfolio from "../assets/portfolio.png";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl mb-4">
          You can find more information about me by checking out my portfolio.
        </h2>
        {/* <p className="text-gray-500 my-2">
          Checkout these resources with 100 JavaScript Projects
        </p> */}
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://kawsar-mia.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Portfolio
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src={portfolio} alt="Portfolio Image" />
      </div>
    </div>
  );
};

export default CallToAction;

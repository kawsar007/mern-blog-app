import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="">
        {/* Left */}
        <div className="left">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Kawsar&apos;s
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            nostrum perferendis eligendi cum beatae vitae fugiat repudiandae eos
            quo fuga!
          </p>
        </div>

        {/* Right */}
        <div className="right"></div>
      </div>
    </div>
  );
};

export default SignUp;

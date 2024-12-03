import { Link } from "react-router-dom";
import me from "../../assets/kawsar1.jpg";

// react icons

const ExploreMe = () => {
  return (
    <div className='w-full rounded-md relative group overflow-hidden'>
      {/*  image  */}
      <img src={me} alt='Kawsar' className='w-full h-[450px] object-cover' />

      {/*  texts  */}
      <div className='flex items-center justify-evenly backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-0 transition-all duration-[400ms] overflow-hidden'>
        <div>
          <h3 className='text-[1.5rem] translate-y-0 transition-all duration-700 font-bold tracking-[2px] leading-[30px] opacity-100'>
            Md Kawsar Mia
          </h3>
          <p className='text-[1rem] translate-y-0 transition-all duration-500 opacity-100'>
            Software Engineer
          </p>
        </div>

        {/*  socials icons  */}
        <div className='flex items-center gap-[20px] mt-[15px] border py-1 px-2 rounded-md'>
          <Link to='/about'>About Me</Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreMe;

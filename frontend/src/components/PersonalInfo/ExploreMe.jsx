import { Link } from "react-router-dom";

// react icons

const ExploreMe = () => {
  return (
    <div className='w-full rounded-md relative group overflow-hidden'>
      {/*  image  */}
      <img
        src='https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1728139729~exp=1728143329~hmac=dd0870841ecbe138afdb639fee17206241a94b02b17e1e681ad16eba38f0bd7b&w=996'
        alt='animated_cards'
        className='w-full h-[450px] object-cover'
      />

      {/*  texts  */}
      <div className='flex items-center justify-evenly backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden'>
        <div>
          <h3 className='text-[1.5rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[2px] leading-[30px] opacity-0 group-hover:opacity-100'>
            Md Kawsar Mia
          </h3>
          <p className='text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100'>
            Software Engineer
          </p>
        </div>

        {/*  socials icons  */}
        <div className='flex items-center gap-[20px] mt-[15px] border py-1 px-2 rounded-md'>
          <Link to="/about">
          About Me
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ExploreMe;

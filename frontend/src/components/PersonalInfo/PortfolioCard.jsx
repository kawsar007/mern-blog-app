import { Link } from "react-router-dom";
import portfolio from "../../assets/portfolio.png";

const PortfolioCard = () => {
  return (
    <div className='w-full relative'>
      <Link to='https://kawsar-mia.netlify.app/' target='_blank'>
        <img
          src={portfolio}
          alt='image'
          className='w-full h-[220px] object-cover rounded-md'
        />

        <div className='absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-5 rounded-b-xl'>
          <h1 className='text-[1.8rem] text-white font-bold leading-[34px] mt-4'>
            Portfolio
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default PortfolioCard;

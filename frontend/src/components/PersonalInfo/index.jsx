import ExploreMe from "./ExploreMe";
import PortfolioCard from "./PortfolioCard";
import ProfileCard from "./ProfileCard";
import RandomBlog from "./RandomBlog";

const PersonalInfo = () => {
  return (
    <div className='container mx-auto p-4'>
      <div className='flex flex-col lg:flex-row gap-4 max-w-6xl mx-auto'>
        {/* Left Side - 2 Columns */}
        <div className='flex flex-col lg:w-2/3 gap-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <ExploreMe />
            <div className='flex flex-col gap-3'>
              <RandomBlog />
              <PortfolioCard />
            </div>
          </div>
        </div>

        {/* Right Side - 1 Column */}
        <div className='lg:w-1/3 rounded-lg shadow'>
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

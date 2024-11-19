import { CiMail } from "react-icons/ci";
import {
  FaDribbble,
  FaFacebook,
  FaFacebookMessenger,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import kawsar from "../../assets/kawsar.jpg";
const ProfileCard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='relative flex h-32 w-full justify-center rounded-xl bg-cover'>
        <img
          src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png'
          className='absolute flex h-24 w-full justify-center bg-cover rounded-t-xl'
          alt='Banner'
        />
        <div className='absolute -bottom-4 flex h-24 w-24 items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700'>
          <img
            className='h-full w-full rounded-full'
            src={kawsar}
            alt='Avatar'
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className='mt-6 flex flex-col items-center'>
        <h4 className='text-xl font-bold text-navy-700 dark:text-white'>
          Md Kawsar Mia
        </h4>
        <p className='text-base font-normal text-gray-600'>Software Engineer</p>
      </div>

      <div className='mt-3 mb-2 px-2 flex gap-14 md:!gap-14'>
        I&apos;m a passionate Full Stack Developer with expertise in React,
        Next, Vue, TypeScript, JavaScript, Node, Express, MongoDB and Python.
      </div>

      <div className='mt-6 flex justify-center gap-4 mb-4'>
        <Link to="/contact" className='rounded-lg bg-green-700 px-4 py-1 text-white transition hover:bg-green-600 flex justify-center items-center'>
          Contact Me <IoIosSend className='h-4 w-4 ml-2' />
        </Link>
        <Link
          to='https://m.me/imkawsar007' // Redirects to Messenger
          target='_blank'
          className='rounded-full bg-blue-600 p-3 text-white transition hover:bg-blue-700'
        >
          <FaFacebookMessenger className='w-5 h-5 transition-transform transform hover:scale-110' />
        </Link>
      </div>

      <div className='mt-2 w-full border-t-2 border-black dark:border-white'>
        <div className='mt-2 flex justify-center gap-6 pb-2 text-gray-400'>

          <Link
            to='mailto:imkawsar007@gmail.com' // Updated to use mailto protocol
            className='transition hover:text-gray-200'>
            <CiMail className='w-5 h-5' />
          </Link>
          <Link
            to='https://www.facebook.com/imkawsar007'
            target='_blank'
            className='transition hover:text-gray-200'>
            <FaFacebook className='w-5 h-5' />
          </Link>
          <Link
            to='https://github.com/kawsar007'
            target='_blank'
            className='transition hover:text-gray-200'>
            <FaGithub className='w-5 h-5' />
          </Link>
          <Link href='#' className='transition hover:text-gray-200'>
            <FaTwitter className='w-5 h-5' />
          </Link>

          <Link
            to='https://www.linkedin.com/in/kawsar007/'
            target='_blank'
            className='transition hover:text-gray-200'>
            <FaLinkedin className='w-5 h-5' />
          </Link>
          <Link href='https://www.instagram.com/imkawsar007/' target='_blank' className='transition hover:text-gray-200'>
            <FaInstagram className='w-5 h-5' />
          </Link>
          <Link
            to='https://kawsar-mia.netlify.app/'
            className='transition hover:text-gray-200'>
            <FaDribbble className='w-5 h-5' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

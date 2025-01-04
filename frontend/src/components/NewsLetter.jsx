import { Button } from "flowbite-react";
import React from "react";

// react icons
import { MdOutlineMail } from "react-icons/md";

const NewsletterForm = () => {

    return (
      <section className="max-w-6xl mx-auto p-4 sm:p-6 rounded-xl bg-gray-100 dark:bg-[#10172A] relative my-4 
  border border-gray-200 dark:border-gray-700 
  shadow-sm hover:shadow-md transition-shadow duration-300 sm:mx-4 md:mx-auto">
      {/* email icon - unchanged */}
      <div className="rounded-full absolute top-[-30px] border-[3px] border-white left-[50%] transform translate-x-[-50%] bg-gradient-to-t from-blue-500 to-purple-500 p-1.5 w-max">
          <MdOutlineMail className="border border-white p-1.5 rounded-full text-[3rem] text-white"/>
      </div>

      {/* content */}
      <div className="sm:w-[70%] w-full lg:w-[50%] mx-auto">
          <h1 className="text-[2rem] sm:text-[2rem] mt-8 font-[800] capitalize text-blue-500 leading-[50px] text-center">newsletter</h1>
          <p className="text-[1.1rem] mt-2 text-center text-gray-600 dark:text-gray-200 font-[300]">
              Stay updated with my latest blogs.
          </p>

          <form className="mt-12 sm:flex-row flex-col flex items-end sm:items-center justify-between gap-[15px]">
              <input 
                  placeholder="Email Address"
                  className="w-full py-3 px-4 outline-none focus:ring-0 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <Button className="px-6 py-[6px]" gradientDuoTone="purpleToBlue">Submit</Button>
          </form>

          <p className="text-[0.9rem] text-gray-500 dark:text-gray-400 text-center mt-8">
              Your email is safe with us, we don&quot;t spam
          </p>
      </div>
  </section>
    );
};

export default NewsletterForm;
                    
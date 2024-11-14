
import React from "react";

// react icons
import { FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

const ExploreMe = () => {

    return (
        <div
            className="w-full sm:w-[80%] lg:w-[60%] rounded-md relative group overflow-hidden">

            {/*  image  */}
            <img
                src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1728139729~exp=1728143329~hmac=dd0870841ecbe138afdb639fee17206241a94b02b17e1e681ad16eba38f0bd7b&w=996"
                alt="animated_cards" className="w-full h-[350px] object-cover"/>

            {/*  texts  */}
            <div
                className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
                <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">Jack
                    Leo</h3>
                <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">Product
                    Designer</p>

                {/*  socials icons  */}
                <div className="flex items-center gap-[20px] mt-[15px]">
                    <div
                        className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <ImFacebook2
                            className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200"/>
                    </div>
                    <div
                        className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100">
                        <FaXTwitter
                            className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200"/>
                    </div>
                    <div
                        className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100">
                        <FaDribbble
                            className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreMe;
              
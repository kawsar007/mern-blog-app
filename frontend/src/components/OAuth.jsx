import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";

const OAuth = () => {
  const handleGoogleClick = () => {};
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      outlone
      onClick={handleGoogleClick}
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with google
    </Button>
  );
};

export default OAuth;

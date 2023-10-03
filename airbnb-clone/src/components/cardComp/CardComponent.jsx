import React from "react";
import { AiFillStar } from "react-icons/ai";
const CardComponent = () => {
  return (
    <div className="lg:max-w-[320px] md:max-w-[200px] lg:max-h-[303px]  rounded-xl p-1 ">
      <div className="  ">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-53408947/original/fa04d4b3-76b7-4b46-97fe-e1e2721f5e44.jpeg?im_w=720 "
          alt="iimg"
          className="object-cover w-full  h-full rounded-xl "
        />
      </div>
      <div className="mt-2 p-1">
        <div className="font-medium  flex items-center justify-between ">
          <div className=" ">Jibhi, India</div>
          <div className=" flex items-center">
            <div className="mr-2">
              <AiFillStar />
            </div>

            <div className="font-thin">4.62</div>
          </div>
        </div>
        <div>
          <div className="font-thin">332 kilometres away</div>
          <div className=" font-thin">21-26 Apr</div>
          <div className="mt-1">
            <span className="font-semibold ">₹11,411</span> <span> night</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

import React from "react";
import { FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
const RightSideNav = () => {
  return (
    <div className="p-4 space-y-3">
      <div>
        <h2 className="text-3xl font-semi-bold ">Login With</h2>
        <button className="btn btn-outline rounded-sm w-full">
          <FaGoogle />
          Google{" "}
        </button>
        <button className="btn btn-outline rounded-sm w-full">
          <FaGithub /> Github{" "}
        </button>
      </div>
      <div>
        <h2 className="text-3xl font-semi-bold ">Find Us on</h2>
        
        <a href="#" className="p-4 flex items-center gap-2 border rounded-sm">
          <FaFacebookF /> <span>Facebook</span>
        </a>
        <a href="#" className="p-4 flex items-center gap-2 border rounded-sm">
          <FaTwitter /> <span>Twitter</span>
        </a>
        <a href="#" className="p-4 flex items-center gap-2 border rounded-sm">
          <FaInstagram /> <span>Instagram</span>
        </a>
      </div>
      <div>
        <h2> Q ZONE</h2>
        <img src={qZone1} alt="qzone"/>
        <img src={qZone2} alt="qzone"/>
        <img src={qZone3} alt="qzone"/>
      </div>
    </div>
  );
};

export default RightSideNav;

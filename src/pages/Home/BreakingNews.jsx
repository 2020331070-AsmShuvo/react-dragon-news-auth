import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-2 bg-gray-700 rounded-sm my-3 p-2">
      <button className="btn bg-red-700 text-white font-semibold border-none outline-none">
        Latest
      </button>
      <Marquee pauseOnHover speed={100}>
        <Link to="/">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos alias temporibus voluptatem corporis tempora non quibusdam quas aperiam eligendi quasi?.....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;

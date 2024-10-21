import React from "react";
import taj from "../../assets/Taj.png";

const Map = () => {
  return (
    <div className="relative flex flex-wrap">
      {/* Left side: Address and contact info */}
      <div className="absolute right-0 bottom-0 w-full sm:w-[25%] z-10">
        <div
          className="px-5 text-[16px] py-10 bg-[#002366] mx-5 sm:mx-10 text-white rounded-2xl"
          style={{
            backgroundImage: `url(${taj})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <p className="w-full sm:w-[80%]">
          Post Code 2930, Street Bredabaan 859, Belgium
          </p>
          <br />
          <p>
            Phone: <span className="text-[#EC9422]">+32467762470</span>{" "}
            <br /> Email:{" "}
            <span className="text-[#EC9422]">info@k2kitsupport.com</span>
          </p>
        </div>
      </div>

      {/* Right side: Google Map */}
      <div className="w-full">
        <div className="px-4">
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white cursor-pointer">
            Our Location
          </h2>
          <iframe title="k2k location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.9879001445724!2d4.50939687629014!3d51.311346925007165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c40648ed21f8a3%3A0x81d06a0f8f282a10!2sBredabaan%20859%2C%202930%20Brasschaat%2C%20Belgium!5e0!3m2!1sen!2sin!4v1729148986252!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" />

        </div>
      </div>
    </div>
  );
};

export default Map;

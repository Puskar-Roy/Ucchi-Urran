import React from "react";

function Hero() {
  return (
    <div className="md:mx-8 mx-6">
      <div className=" overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 ">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black">
            ऊँची उड़ान में आपका स्वागत है!
          </h2>
          <p className="text-md mt-4 text-gray-600 text-justify">
            Current Affairs for BPSC, UPPSC, MPPSC, JPSC, BSSC, RPSC, SSC, और
            अन्य Competitive और&nbsp;Government Job Examinations के लिए ऊँची
            उड़ान वेबसाइट और फेसबुक पेज को Follow करें।
          </p>

          <div className="mt-12 flex justify-center items-center">
            <button
              type="button"
              className="bg-blue-500 mx-auto text-[18px] text-white rounded-lg px-4 py-1 hover:scale-110 duration-500 "
            >
              Start Learning & Fly High
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8 p-2 lg:p-24">
          <img
            src="/Images/bpsc.jpeg"
            className="w-1/2 rounded-lg"
            alt="Meow"
          />
          <div>
            <img
              src="/Images/upsc.jpeg"
              className="mb-8 rounded-lg"
              alt="Meow"
            />
            <img src="/Images/ssc.jpeg" className="rounded-lg" alt="Meow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

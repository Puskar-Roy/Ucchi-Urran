import React from "react";
import {
  FaDownload,
  FaFileAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaSearch,
} from "react-icons/fa";
function DownloadPage() {
  return (
    <div className="mx-auto py-[8rem] ">
      <div className="flex ">
        <div className="w-2/3 p-4 overflow-y-auto">
          <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6 ">
            UPSC download title 1 pdf note 1
          </h1>
          <div className="mx-6 my-12">
            <img
              alt="meow"
              src="/Images/upsc.jpeg"
              class="w-full mx-auto rounded-lg"
            />
          </div>

          <div className="w-18 mx-12 flex-col p-4 border border-2 rounded-lg mt-16">
            <div className="flex justify-between ">
              <FaFileAlt className="w-12 h-12" />

              <h1 className="text-center text-lg ">
                Monthly Current Affairs of Jun 2020 PDF Download Set no- 205
              </h1>
            </div>
            <div className="flex justify-between mx-12  mt-4">
              <span>Size: 10MB</span> <span>Downloads: 125</span>
              <span>Last Updated: 30 August</span>
            </div>
            <a href="#">
              <div className="mt-6 flex w-fit hover:bg-teal-500 px-3 py-1 justify-between space-x-3 text-lg mx-auto rounded-full bg-teal-300 text-white">
                <FaDownload className="w-6 h-6" />
                <span>Download</span>
              </div>
            </a>
          </div>
          <div className="flex justify-between mt-6 mx-12 ">
            <span className="text-center text-lg ">Share with Friends :</span>
            <span className="flex text-gray-400 justify-center space-x-5">
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaFacebook className="text-blue-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaTwitter className="text-blue-400 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-blue-600 w-7 h-7" />
              </a>
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-green-500 w-7 h-7" />
              </a>
            </span>
          </div>

          <h1 className="mt-10 text-[1.3rem] font-[550] text-center">
            Monthly Current Affairs of Jun 2020 PDF Download Set no- 205
          </h1>
          <p className="mt-4 text-justify text-lg">
            Monthly Current Affairs of Jun 2020 PDF Download is now out by
            UnchiUdaan.in You can Download it here and Get Daily 10 Questions of
            Latest Current Affairs of Jun 2020 on UnchiUdaan Facebook Page. You
            can also Download other Previous Monthly Current Affairs of Jun 2020
            along with Current affairs of Jun available in Free Download page of
            this Website. <br /> <br /> This PDF is the Successive Series of
            Unchiudaan Monthly Current affairs PDF of Jun that is Being Issued
            by Unchi Udaan. You can also Download the Previous Month PDF for
            Free Monthly PDF. You can also download other PDFs{" "}
          </p>
          <div className="flex justify-between mt-10 mx-12 ">
            <span className="text-center text-lg ">Share with Friends :</span>
            <span className="flex text-gray-400 justify-center space-x-5">
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaFacebook className="text-blue-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaTwitter className="text-blue-400 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-blue-600 w-7 h-7" />
              </a>
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-green-500 w-7 h-7" />
              </a>
            </span>
          </div>
        </div>

        <div className="w-1/3 p-4 space-y-10">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 w-full rounded-md border border-gray-500 focus:outline-none focus:border-indigo-500"
            />
            <button className="absolute right-4 bg-indigo-500 text-white p-3 rounded-md flex items-center hover:bg-indigo-600 focus:outline-none">
              <FaSearch className="mx-2" />
            </button>
          </div>
          <div className="my-10">
            <h1 className="text-center text-xl">Download By Category</h1>
            <ul className="flex flex-col space-y-2 m-4">
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    UPSC
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    BPSC
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    SSC
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    meow
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex space-x-2">
                  <span className="h-2 w-2 bg-black rounded-md my-auto"></span>
                  <span className="text-purple-300 hover:text-purple-500">
                    UPSC
                  </span>
                </li>
              </a>
            </ul>
          </div>

          <div className="my-10">
            <h1 className="text-center text-xl">Latest Posts</h1>
            <ul className="flex flex-col space-y-3 m-4">
              <a href="">
                <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
                  <span className="text-lg">UPSC Notes Pdfs 2</span>
                  <span className="justify-between flex">
                    <span>31 August</span>
                    <span>125 Views</span>
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
                  <span className="text-lg">UPSC Notes Pdfs 3</span>
                  <span className="justify-between flex">
                    <span>31 August</span>
                    <span>125 Views</span>
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
                  <span className="text-lg">BPSC Notes Pdfs 2</span>
                  <span className="justify-between flex">
                    <span>31 August</span>
                    <span>125 Views</span>
                  </span>
                </li>
              </a>
              <a href="">
                <li className="flex flex-col space-y-2 rounded-lg border-2 px-3 py-1 ">
                  <span className="text-lg">SSC Notes Pdfs 2</span>
                  <span className="justify-between flex">
                    <span>31 August</span>
                    <span>125 Views</span>
                  </span>
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownloadPage;

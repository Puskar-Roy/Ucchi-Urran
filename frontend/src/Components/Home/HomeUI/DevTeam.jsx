import React from "react";
import HighlightText from "../core/Homepage/HighlightText";
import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const socialMediaIcons = {
  github: FaGithub,
  twitter: FaTwitter,
  instagram: FaInstagram,
};

const users = [
  {
    name: "User 1",
    jobTitle: "Job Title 1",
    description: "Description 1",
    socialMediaLinks: {
      github: "https://github.com/user1",
      twitter: "https://twitter.com/user1",
      instagram: "https://www.instagram.com/user1/",
    },
  },
  {
    name: "User 2",
    jobTitle: "Job Title 2",
    description: "Description 2",
    socialMediaLinks: {
      github: "https://github.com/user2",
      twitter: "https://twitter.com/user2",
      instagram: "https://www.instagram.com/user2/",
    },
  },
  // Add more user profiles as needed
];

function DevTeam() {
  return (
    <div>
      <h1 className="text-[2rem] text-center py-[6rem] ">
        Developers of <HighlightText text={"ऊँची उड़ान"} />
      </h1>

      {users.map((user, index) => (
        <div
          key={index}
          className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
        >
          <div className="rounded overflow-hidden shadow-md bg-white">
            <div className="absolute -mt-20 w-full flex justify-center">
              <div className="h-32 w-32">
                <img
                  src={user.socialMediaLinks.github}
                  alt={`Display Picture of ${user.name}`}
                  role="img"
                  className="rounded-full object-cover h-full w-full shadow-md"
                />
              </div>
            </div>
            <div className="px-6 mt-16">
              <h1 className="font-bold text-3xl text-center mb-1">
                {user.name}
              </h1>
              <p className="text-gray-800 text-sm text-center">
                {user.jobTitle}
              </p>
              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                {user.description}
              </p>
              <div className="w-full flex justify-center pt-5 pb-5">
                {Object.entries(user.socialMediaLinks).map(([media, link]) => (
                  <a
                    key={media}
                    href={link}
                    className="mx-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div aria-label={media} role="img">
                      {React.createElement(socialMediaIcons[media])}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DevTeam;

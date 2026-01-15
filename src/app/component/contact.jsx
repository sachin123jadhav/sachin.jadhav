import React from "react";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Call from "../../../public/images/Call.svg";
import Email from "../../../public/images/Email.svg";
import Location from "../../../public/images/Location.svg";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Start */}
      <section
        className="relative md:py-24 py-16 bg-gray-50 dark:bg-black-800"
        id="contact"
      >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Get In Touch !
            </h3>

            <p className="text-black-400 max-w-xl mx-auto">
              Need UI/UX expertise? Let’s connect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-start">
            {/* Phone */}
            <div className="flex items-start">
              <div className="icons text-center mx-auto">
                <Image src={Call} alt="9890122027" />
                {/* <FiPhone className="rounded text-2xl dark:text-white mb-0" /> */}
              </div>
              <div className="flex-1 ms-6">
                <h5 className="text-lg dark:text-white mb-2 font-medium">
                  Phone
                </h5>
                <a href="tel:+919890122027" className="text-black-400">
                  +91 9890122027
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start">
              <div className="icons text-center mx-auto">
                <Image src={Email} alt="sachin123jadhav@gmail.com" />
              </div>
              <div className="flex-1 ms-6">
                <h5 className="text-lg dark:text-white mb-2 font-medium">
                  Email
                </h5>
                <a
                  href="mailto:sachin123jadhav@gmail.com"
                  className="text-black-400"
                >
                  sachin123jadhav@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div className="icons text-center mx-auto">
                <Image src={Location} alt="Pune" />
                {/* <FiMapPin className="rounded text-2xl dark:text-white mb-0" /> */}
              </div>
              <div className="flex-1 ms-6">
                <h5 className="text-lg dark:text-white mb-2 font-medium">
                  Location
                </h5>
                <p className="text-black-400 mb-2">Bhugaon, Pune-412115</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

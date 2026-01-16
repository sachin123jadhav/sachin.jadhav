import React from "react";
import Image from "next/image";
import Link from "next/link";

import { TbChartCircles,TbFlower } from "react-icons/tb";
import { FiArrowRight, FiCpu } from "react-icons/fi";
import { AiOutlineFire } from "react-icons/ai";
import { LuShoppingBasket,LuFlipVertical2 } from "react-icons/lu";

export default function MyExperience() {
  const team = [
    {
      title: "Grow Your Business",
      Icon: TbChartCircles ,
      subtext:"The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Drive More Sales",
      Icon: FiCpu  ,
      subtext:"The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Handled By Expert",
      Icon:AiOutlineFire ,
      subtext:"The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Discussion For Idea",
      Icon: LuShoppingBasket ,
      subtext:"The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Increase Conversion",
      Icon: TbFlower ,
      subtext:"The phrasal sequence of the is now so that many campaign and benefit",
    },
    {
      title: "Sales Growth Idea",
      Icon: LuFlipVertical2 ,
      subtext:"The phrasal sequence of the is now so that many campaign and benefit",
    },
  ];

  return (
    <>
      {/* Start */}
      <section id="features" className="relative md:py-24 py-16">
      

        <div className="container md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="text-orange-600 text-base font-medium uppercase mb-2">
              Work Process
            </h6>
            <h3 className="mb-4 md:text-2xl text-xl font-medium dark:text-white">
              Digital System For Our Business
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-8">
            <div className="timeline relative">
              <div className="timeline-item">
                <div className="grid sm:grid-cols-2">
                  <div className="">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image
                        src={"/images/svg/design-thinking.svg"}
                        className="h-64 w-64"
                        alt=""
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Strategy
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        The generated injected humour, or non-characteristic
                        words etc. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Donec quam
                        felis,
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="md:order-1 order-2">
                    <div className="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Development
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        The generated injected humour, or non-characteristic
                        words etc. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Donec quam
                        felis,
                      </p>
                    </div>
                  </div>
                  <div className="md:order-2 order-1">
                    <div className="duration duration-right md:ms-7 relative">
                      <Image
                        src={"/images/svg/coding.svg"}
                        className="h-64 w-64"
                        alt=""
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item mt-5 pt-4">
                <div className="grid sm:grid-cols-2">
                  <div className="mt-4 mt-sm-0">
                    <div className="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                      <Image
                        src={"/images/svg/office-desk.svg"}
                        className="h-64 w-64"
                        alt=""
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="mt-4 mt-sm-0">
                    <div className="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                      <h5 className="text-lg dark:text-white mb-1 font-medium">
                        Launch
                      </h5>
                      <p className="timeline-subtitle mt-3 mb-0 text-slate-400">
                        The generated injected humour, or non-characteristic
                        words etc. Cum sociis natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Donec quam
                        felis,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


import {
    AiFillLinkedin,
    AiOutlineGithub,
    AiFillMail,
} from "react-icons/ai";

import { BsMoonFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper';
import 'swiper/css';
import { useState } from "react";


import profile from "../images/personnalphoto.jpg"

import { Card } from 'primereact/card';


export default function Home() {
    SwiperCore.use([Autoplay])
    const email = 'badr.ibnbrahim@gmail.com';
    const subject = 'Portfolio Inquiry';
    const body = 'Hello Mr_Badr, I am interested in your work.';

    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div >
            <div className="bg-black text-center text-white  ">
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                >

                    <SwiperSlide><p className="text-sm">Your work is going to fill a large part of your life</p>
                    </SwiperSlide>
                    <SwiperSlide><p className="text-sm"> and the only way to be truly satisfied is :</p>
                    </SwiperSlide>
                    <SwiperSlide><p className="text-sm"> to do what you believe is great work,</p>
                    </SwiperSlide>
                    <SwiperSlide><p className="text-sm">And the only way to do great work is :</p>
                    </SwiperSlide>
                    <SwiperSlide><p className="text-sm"> to love what you do :) </p>
                    </SwiperSlide>

                </Swiper>
            </div>

            <main className=" bg-white px-10  md:px-20  mt-5 " >
                <section className="min-h-screen">

                    <h2 className="text-5xl  text-center mx-auto p-10 py-2 text-blue-400 font-burtons   md:text-5xl">
                        Badr Ait Hammou
                    </h2>
                    <h3 className="text-2xl  text-center mx-auto p-10 py-1 md:text-1xl">
                        Software Engineering Student
                    </h3>
                    <div className=" mx-auto bg-gradient-to-b from-blue-500-500 rounded-full w-80 h-85 relative overflow-hidden mt-10 md:h-96 md:w-86">
                        <img src={profile} layout="fill"  objectFit="cover" />
                    </div>

                    <div className="text-center mx-auto p-10 py-1">

                        <div className="text-5xl flex justify-center gap-16 py-5 dark:text-gray-400">

                            <a href={mailToLink}>
                                <AiFillMail className="text-red-600  hover:text-red-400" />
                            </a>
                            <a href="https://www.linkedin.com/in/badr-ait-hammou-24357b233/"  target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin className="text-blue-500 hover:text-blue-400"/>
                            </a>
                            <a href="https://github.com/Badr-Ait-Hammou"  target="_blank" rel="noopener noreferrer">

                                <AiOutlineGithub className="text-black hover:text-gray-500 "/>
                            </a>
                        </div>

                    </div>

                </section>
                <Card  >
                    <p className="text-center font-medium " >
                        I am highly interested in software development and learning new technologies.
                        I have strong skills in programming and problem-solving,
                        and I have participated in numerous software development projects as a part of a team.
                    </p>
                </Card>
            </main>
        </div>
    );
}

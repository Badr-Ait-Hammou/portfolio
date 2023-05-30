
import {
    AiFillLinkedin,
    AiOutlineGithub,
    AiFillMail,
} from "react-icons/ai";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay} from 'swiper';
import 'swiper/css';
import "../styles/contact.css"

import profile from "../images/personnalphoto.jpg"

import { Card } from 'primereact/card';
import React from "react";


export default function Home() {
    SwiperCore.use([Autoplay])
    const email = 'badr.ibnbrahim@gmail.com';
    const subject = 'Portfolio Inquiry';
    const body = 'Hello Mr_Badr, I am interested in your work.';

    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className="font-semibold animated fadeInDown">
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

                    <h2 className="text-5xl  text-center mx-auto p-10 py-2 text-cyan-950 font-burtons md:text-5xl animated fadeInDown">
                         AIT HAMMOU Badr
                    </h2>
                    <h3 className="text-2xl  text-center mx-auto p-10 py-1 md:text-1xl animated fadeInDown">
                        Software Engineering Student
                    </h3>
                    <div className=" mx-auto bg-gradient-to-b from-blue-500-500 rounded-full w-80 h-85 relative overflow-hidden mt-10 md:h-96 md:w-86 animated fadeInDown">
                        <img src={profile} alt="badr" />
                    </div>

                    <div className="text-center mx-auto p-10 py-1 animated fadeInDown">

                        <div className="text-5xl flex justify-center gap-16 py-5 animated fadeInDown">

                            <a href={mailToLink}>
                                <AiFillMail className="text-red-600  hover:text-red-400 animated fadeInDown" />
                            </a>
                            <a href="https://www.linkedin.com/in/badr-ait-hammou-24357b233/"  target="_blank" rel="noopener noreferrer">
                                <AiFillLinkedin className="text-blue-500 hover:text-blue-400 animated fadeInDown"/>
                            </a>
                            <a href="https://github.com/Badr-Ait-Hammou"  target="_blank" rel="noopener noreferrer">

                                <AiOutlineGithub className="text-black hover:text-gray-500 animated fadeInDown"/>
                            </a>
                        </div>

                    </div>

                </section>
                <Card  >
                    <p className="text-center font-medium animated fadeInDown " >
                        AIT HAMMOU Badr, a <span className="text-teal-500"> Software Engineering Student. </span> I have got my bachelor's degree from FST <span className="text-teal-500"> Sciences and technologies University </span>in 2022.
                        During my time at university, I specialized in computer science and gained a lot of <span className="text-teal-500"> skills and knowledge </span>  related to software development,
                        programming languages, data analysis, and much more.
                        I'm really passionate about technology and how it can be used to solve complex problems. That's why I'm so excited to be continuing my education at <span className="text-teal-500"> EMSI </span> School, where I have just started pursuing  <span className="text-teal-500"> my software engineering degree </span> in 2023.</p>
                        <p className="text-center font-medium  animated fadeInDown" >
                        Looking back, I feel really proud of my educational background and the skills I've developed along the way. I'm eager to explore different career paths in the industry and see where my journey in computer science takes me next!

                    </p>
                </Card>
            </main>
        </div>
    );
}

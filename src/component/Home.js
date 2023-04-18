
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

import android2 from "../images/android2.png";
import android5 from "../images/android5.png";
import aithammoudev from "../images/aithammoudev.png";
import shop from "../images/benhaddouch.png";
import logocompany from "../images/logocompany.png";
import enterprises from "../images/ahenterprises.png";
import web5 from "../images/gestiost.png";
import web6 from "../images/nanolog.jpg";
import coursera from "../images/udemy.png";
import udemy from "../images/udemy1.png";
import spring from "../images/spring.png";
import dash from "../images/badrbadrbadr.png";
import angular from "../images/angular.png";
import bootst from "../images/bootst.png";
import csh from "../images/csh.png";
import django from "../images/django.png";
import dotnet from "../images/dotnet.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import uca from "../images/fst.png";
import emsi from "../images/Sans titre (1).png";
import payment from "../images/payment.jpg";
import department from "../images/department.png";
import ben from "../images/benh.png"
import dev from "../images/devanddes.jpg"
import bootstrapcertif from "../images/bootstraphonor.png"
import agile from "../images/agile.png"
import devops from "../images/devops.png"
import frontreacthonor from "../images/frontreacthonor.png"
import profile from "../images/personnalphoto.jpg"
import servers from "../images/servers.png"
import testfull from "../images/testfull.png"
import b from "../images/badrdevelopperanddesigner.jpg"

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    SwiperCore.use([Autoplay])
    const email = 'badr.ibnbrahim@gmail.com';
    const subject = 'Portfolio Inquiry';
    const body = 'Hello Mr_Badr, I am interested in your work.';

    const mailToLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <div className={darkMode ? "dark" : ""}>

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

            <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <section className="min-h-screen">

                    <nav className="py-10 mb-1 flex justify-between dark:text-white">

                        <ul className="flex items-center">
                            <li>
                                <BsMoonFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className=" cursor-pointer text-2xl "
                                />
                            </li>
                        </ul>
                        <ul className="flex items-center">

                            <li>
                                <a
                                    className="bg-gradient-to-r from-cyan-400 text- to-blue-500 text-white px-4 py-2 border-none rounded-md ml-8" href="#"

                                >
                                    Resume
                                </a>
                            </li>

                        </ul>
                    </nav>
                    <h2 className="text-5xl  text-center mx-auto p-10 py-2 text-blue-400 font-burtons dark:text-blue-400 md:text-5xl">
                        Badr Ait Hammou
                    </h2>
                    <h3 className="text-2xl  text-center mx-auto p-10 py-1 dark:text-white md:text-1xl">
                        Software Engineering Student
                    </h3>
                    <div className=" mx-auto bg-gradient-to-b from-blue-500-500 rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
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

                                <AiOutlineGithub className="text-black hover:text-gray-500 dark:text-white"/>
                            </a>
                        </div>
                        <p className="text-md py-2  leading-8 text-center text-gray-800 dark:text-gray-200">
                            I am highly interested in software development and learning new technologies. I have strong skills in programming and problem-solving, and I have participated in numerous software development projects as a part of a team.
                        </p>
                    </div>
                </section>
                <section >
                    <div>
                        <h3 className="text-4xl py-2  text-center dark:text-white font-burtons">Services I offer</h3>
                        <p className="text-md py-2  leading-8 text-center text-gray-800 dark:text-gray-200">
                            Since the beginning of my journey as a software engineer and a designer,
                            I have done remote work for a lot of
                            <span className="text-teal-500"> enterprises </span>
                            ,and collaborated with talented people to develop performant applications.
                            I offer a wide range of services, including brand design and programming.
                        </p>

                        <h3 className="text-4xl  py-2 text-center dark:text-white font-burtons ">Frameworks And Languages I Use:</h3>

                    </div>
                    <div className="lg:flex gap-6  ">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={csh} width={100} height={100} />

                            <p className="py-2 text-blue-400 font-bold text-1xl ">
                                C#
                            </p>
                            <h4 className="py-4 text-black  dark:text-white">Desktop Applications</h4>

                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={angular} width={100} height={100} />

                            <p className="py-2 text-blue-400 font-bold text-1xl">
                                Angular
                            </p>
                            <h4 className="py-4 text-black  dark:text-white">Consistent UI designe</h4>

                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={dotnet} width={100} height={100} />

                            <p className="py-2 text-blue-400 font-bold text-1xl">
                                .Net
                            </p>
                            <h4 className="py-4 text-black  dark:text-white">Performant Applications </h4>

                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={react} width={100} height={100} />

                            <p className="py-2 text-blue-400 font-bold text-1xl">
                                React
                            </p>
                            <h4 className="py-4 text-black  dark:text-white">Easy integration</h4>

                        </div>
                    </div>

                    <div className="lg:flex gap-6 ">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={tailwind} width={100} height={100} />

                            <p className="py-2 text-blue-400 font-bold text-1xl">
                                Tailwindcss
                            </p>
                            <h4 className="py-4  text-black  dark:text-white">Responsive Design</h4>

                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={bootst} width={100} height={100} />

                            <p className="py-2 text-blue-400 font-bold text-1xl">
                                Bootstrap
                            </p>
                            <h4 className="py-4  text-black  dark:text-white">Customizable</h4>

                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={django} width={100} height={100} />

                            <p className="py-2 text-blue-400 font-bold text-1xl">
                                Django
                            </p>
                            <h4 className="py-4  text-black  dark:text-white"> Scalability</h4>

                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={spring} width={100} height={100} />

                            <p className="py-2 text-blue-400 font-bold text-1xl">
                                Springboot
                            </p>
                            <h4 className="py-4  text-black  dark:text-white">Enhanced Security</h4>
                        </div>
                    </div>


                </section>
                <section className="py-10">
                    <div>
                        <h3 className="text-4xl py-1  text-center dark:text-white font-burtons ">Education:</h3>
                        <p className="text-md py-2  text-center leading-8 text-gray-800 dark:text-gray-200">
                            Thanks to self education and these two establishments, I have a strong educational background in computer science.
                        </p>

                    </div>

                    <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                        <img src={uca} width={100} height={100} />

                        <p className="py-2 text-center dark:text-white">
                            I obtained my bachelor s  degree in Computer Science from the <span className="text-teal-500"> FST </span> University,
                            where I gained a solid foundation in programming languages, and algorithms.
                        </p>


                    </div>
                    <div className="text-center shadow-lg  p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                        <img src={emsi} width={100} height={100} />

                        <p className="py-2 text-center dark:text-white">
                            I completed my engineering education at <span className="text-teal-500"> EMSI </span> School,
                            where I deepened my understanding of computer architecture,
                            operating systems, and databases.
                        </p>


                    </div>
                    <div>
                        <p className="py-2 text-center dark:text-white" >Through both of these educational experiences,
                            I developed a strong analytical and problem-solving skills,
                            which have been essential to my success in this field.</p>

                        <div>
                            <h3 className="text-4xl py-4 mt-7  text-center dark:text-white font-burtons ">Certifications:</h3>
                            {/* <p className="text-md py-2  text-center leading-8 text-gray-800 dark:text-gray-200">
                Thanks to self education and these two establishments, I have a strong educational background in computer science.
              </p>
              */}
                        </div>

                        <div className=" text-center text-white  ">
                            <Swiper

                                slidesPerView={1}

                                loop={true}

                                autoplay={{
                                    delay:2000,

                                }}
                                spaceBetween={0}

                            >
                                <SwiperSlide> <img className="rounded-lg object-fill text-center " height={330} width={600}
                                                     src={testfull}
                                />

                                </SwiperSlide>
                                <SwiperSlide> <img className="rounded-lg object-fill text-center " height={330} width={600}
                                                     src={devops}
                                />

                                </SwiperSlide>

                                <SwiperSlide><img className="text-center rounded-lg object-fill " height={330} width={600}
                                                    src={frontreacthonor}
                                /></SwiperSlide>
                                <SwiperSlide> <img className="text-center rounded-lg object-fill" height={330} width={600}
                                                     src={bootstrapcertif}
                                /></SwiperSlide>
                                <SwiperSlide> <img className="text-center rounded-lg object-fill" height={330} width={600}
                                                     src={servers}
                                /></SwiperSlide>
                                <SwiperSlide> <img className="rounded-lg object-fill text-center " height={330} width={600}
                                                     src={agile}
                                />

                                </SwiperSlide>
                            </Swiper>
                        </div>


                        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={coursera} width={100} height={100} />

                            <p className="py-2 text-center dark:text-white">
                                <span className="text-teal-500 text-center"> Full stack web development with react </span><br/>
                                This certification demonstrates my proficiency in the React JavaScript library,
                                including the ability to create complex user interfaces and efficiently manage state using React s core features.
                                With this certification, I have demonstrated a mastery of React,
                                which is essential for building modern, scalable web applications.
                            </p>


                        </div>
                        <div className="text-center shadow-lg  p-10 rounded-xl my-10  dark:bg-gray-800 flex-1">
                            <img src={udemy} width={100} height={100} />

                            <p className="py-2 text-center dark:text-white">
                                <span className="text-teal-500 text-center"> Spring & Hibernate for Beginners (includes Spring Boot) </span><br/>
                                <span className="text-teal-500 text-center"> Full Stack: Angular and Java Spring Boot E-Commerce Website </span><br/>

                                These certifications demonstrates my expertise in developing web applications using the Spring Boot framework.
                                With this certification, I have demonstrated proficiency in designing and implementing RESTful web services,
                                integrating with databases, and deploying web applications to production. Spring Boot is a highly sought-after skill in the web development industry,
                                and this certification proves my proficiency in this area.
                            </p>


                        </div>



                        <h3 className="text-4xl py-6  text-center dark:text-white font-burtons ">Some Of My Projects:</h3>
                    </div>




                    <div className=" text-center text-white  ">
                        <Swiper

                            slidesPerView={1}

                            loop={true}
                            autoplay={{
                                delay:2000
                            }}
                            spaceBetween={0}

                        >
                            <SwiperSlide> <img className="rounded-lg object-cover text-center " height={330} width={600}
                                                 src={dash}
                            /></SwiperSlide>

                            <SwiperSlide><img className="text-center rounded-lg object-cover " height={330} width={600}
                                                src={payment}
                            /></SwiperSlide>
                            <SwiperSlide> <img className="text-center rounded-lg object-cover" height={330} width={600}
                                                 src={web5}
                            /></SwiperSlide>
                            <SwiperSlide> <img className="text-center rounded-lg object-cover" height={330} width={600}
                                                 src={web6}
                            /></SwiperSlide>
                            <SwiperSlide> <img className="text-center rounded-lg  " height={330} width={600}
                                                 src={android5}
                            /></SwiperSlide>
                            <SwiperSlide> <img className="text-center rounded-lg " height={330} width={600}
                                                 src={android2}
                            /></SwiperSlide>

                        </Swiper>
                    </div>







                    <h3 className="text-4xl py-6  text-center dark:text-white font-burtons ">My Recent Designs:</h3>
                    <div className="flex flex-col gap-10 py-3 lg:flex-row lg:flex-wrap">

                    </div>
                    <div className=" text-center text-white  ">
                        <Swiper

                            slidesPerView={1}

                            loop={true}
                            autoplay={{
                                delay:2000
                            }}
                            spaceBetween={0}

                        >
                            <SwiperSlide> <img className="rounded-lg object-cover text-center" height={330} width={600}
                                                 src={logocompany}
                            /></SwiperSlide>

                            <SwiperSlide><img className="text-center rounded-lg object-cover" height={330} width={600}
                                                src={enterprises}
                            /></SwiperSlide>

                            <SwiperSlide> <img className=" content-center rounded-lg object-cover"  height={330} width={600}
                                                 src={ben}
                            /></SwiperSlide>
                            <SwiperSlide> <img className=" content-center rounded-lg object-cover"  height={330} width={600}
                                                 src={b}
                            /></SwiperSlide>
                            <SwiperSlide> <img className=" content-center rounded-lg object-cover"  height={330} width={600}
                                                 src={aithammoudev}
                            /></SwiperSlide>
                            <SwiperSlide> <img className=" content-center rounded-lg object-cover"  height={330} width={600}
                                                 src={shop}
                            /></SwiperSlide>
                            <SwiperSlide> <img className="rounded-lg object-cover text-center" height={330} width={600}
                                                 src={dev}
                            /></SwiperSlide>
                            <SwiperSlide> <img className="rounded-lg object-cover text-center" height={330} width={600}
                                                 src={department}
                            /></SwiperSlide>
                        </Swiper>
                    </div>



                </section>
            </main>
        </div>
    );
}

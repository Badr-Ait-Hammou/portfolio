import React from "react"
import { Card } from 'primereact/card';
import reactcertif from "../images/fullstackr.png"
import devopscertif from "../images/devops.png"
import agilecertif from "../images/agile.png"
import bootstrapcertif from "../images/bootstraphonor.png"
import mongodbcertif from "../images/mongodb.png"
import cloudcertif from "../images/cloudcertif.png"
import androidcertif from "../images/androidcertif.png"



export default function Certifications(){
    const react = <img alt="logo" src={reactcertif}  height="10"  className="rounded-lg"></img>;
    const devops = <img alt="logo" src={devopscertif}  height="10"  className="rounded-lg"></img>;
    const agile = <img alt="logo" src={agilecertif}  height="10"  className="rounded-lg"></img>;
    const bootstrap = <img alt="logo" src={bootstrapcertif}  height="10"  className="rounded-lg"></img>;
    const mongodb = <img alt="logo" src={mongodbcertif}  height="10"  className="rounded-lg"></img>;
    const cloud = <img alt="logo" src={cloudcertif}  height="10"  className="rounded-lg"></img>;
    const andr = <img alt="logo" src={androidcertif}  height="10"  className="rounded-lg"></img>;

    return(



        <div>
            <h3 className="text-4xl py-4 mt-5  text-center font-semibold ">Certifications:</h3>


            <div className="flex flex-wrap mx-4">
                <div className="w-full md:w-1/3 px-4 mt-5">

                    <Card
                        title="Full Stack Web Development with React"
                        subTitle="Certificate of Specialization"
                        header={<div className="px-4 pt-4 " >{react}  </div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0 justify-content-center">
                            Through this course, I gained a deep understanding of React and its ecosystem,
                            as well as best practices for building full stack web applications.
                            I am confident in my ability to develop high-quality React applications that are responsive, scalable, and maintainable.
                        </p>
                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="DevOps,Cloud and Agile Foundations "
                        subTitle="Certificate of Specialization"
                        header={<div className="px-4 pt-4 " >{devops}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0">
                            Through this course, I gained a strong understanding of DevOps principles and best practices,
                            and I am confident in my ability to implement and manage DevOps pipelines and tools.
                            I also gained practical experience with popular DevOps tools like Docker.
                        </p>
                    </Card>
                </div>

                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Android App Development  "
                        subTitle="Certificate of Specialization"
                        header={<div className="px-4 pt-4 " >{andr}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0">
                            Through this course, I gained a strong understanding of Android app development principles and best practices.
                            I am confident in my ability to create dynamic and user-friendly mobile applications for the Android platform.
                            I have hands-on experience in UI design, data management, and integration of various APIs and libraries.
                        </p>
                    </Card>
                </div>

            </div>

            <div className="flex flex-wrap mx-4">
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Front-End Web UI Frameworks and Tools: Bootstrap 4"
                        subTitle="Course Certificate"
                        header={<div className="px-4 pt-4 " >{bootstrap}</div>}
                        className="md:w-25rem "
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0 justify-content-center">
                            Through this course, I gained a strong understanding of Bootstrap 4 and its features,
                            and I am confident in my ability to use Bootstrap 4 to create responsive and mobile-first web applications.
                            I also gained practical experience with popular front-end development tools like npm, Gulp, and Webpack.
                        </p>
                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Server-side Development with NodeJS, Express and MongoDB  "
                        subTitle="Course Certificate"
                        header={<div className="px-4 pt-4 " >{mongodb}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0">
                            Through this course, I gained a strong understanding of server-side web development and its technologies,
                            and I am confident in my ability to create scalable and robust server-side applications using NodeJS, Express, and MongoDB.
                            I also gained practical experience with front-end development tools like Bootstrap and jQuery.
                        </p>
                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Introduction to Cloud Computing "
                        subTitle="Course Certificate"
                        header={<div className="px-4 pt-4 " >{cloud}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0">
                            Through this course, I gained a strong understanding of cloud computing and its various models and providers.
                            I am confident in my ability to deploy and manage cloud-based applications,
                            as well as to choose the appropriate cloud model and provider for a given use case.
                        </p>
                    </Card>
                </div>
            </div>

        </div>

    );
}
import React from "react"
import { Card } from 'primereact/card';
import reactcertif from "../images/fullstackr.png"
import devopscertif from "../images/devops.png"
import agilecertif from "../images/agile.png"
import bootstrapcertif from "../images/bootstraphonor.png"
import mongodbcertif from "../images/mongodb.png"
import cloudcertif from "../images/cloudcertif.png"
import androidcertif from "../images/androidcertif.png"
import "../styles/contact.css"
import { Paginator } from 'primereact/paginator';


export default function Certifications(){
    const react = <img alt="logo" src={reactcertif}  height="10"  className="rounded-lg"></img>;
    const devops = <img alt="logo" src={devopscertif}  height="10"  className="rounded-lg"></img>;
    const agile = <img alt="logo" src={agilecertif}  height="10"  className="rounded-lg"></img>;
    const bootstrap = <img alt="logo" src={bootstrapcertif}  height="10"  className="rounded-lg"></img>;
    const mongodb = <img alt="logo" src={mongodbcertif}  height="10"  className="rounded-lg"></img>;
    const cloud = <img alt="logo" src={cloudcertif}  height="10"  className="rounded-lg"></img>;
    const andr = <img alt="logo" src={androidcertif}  height="10"  className="rounded-lg"></img>;

    const [currentPage, setCurrentPage] = React.useState(0);
    const itemsPerPage = 3;

    const certificationData = [
        {
            title: "Full Stack Web Development with React",
            subTitle: "Certificate of Specialization",
            header: react,
            description: " Through this course, I gained a deep understanding of React and its ecosystem,\n" +
                "                            as well as best practices for building full stack web applications.\n" +
                "                            I am confident in my ability to develop high-quality React applications that are responsive, scalable, and maintainable.",
            tags: ["Web Development", "React"],

        }, {
            title:"DevOps,Cloud and Agile Foundations ",
            subTitle:"Certificate of Specialization",
            header: devops,
            description: "Through this course, I gained a strong understanding of DevOps principles and best practices,and I am confident in my ability to implement and manage DevOps pipelines and tools.I also gained practical experience with popular DevOps tools like Docker"
        },{
            title:"Android App Development  ",
            subTitle:"Certificate of Specialization",
            header: andr,
            description: "  Through this course, I gained a strong understanding of Android app development principles and best practices.\n" +
                "                            I am confident in my ability to create dynamic and user-friendly mobile applications for the Android platform.\n" +
                "                            I have hands-on experience in UI design, data management, and integration of various APIs and libraries."
        },{
            title:"Front-End Web UI Frameworks and Tools: Bootstrap 4",
            subTitle:"Course Certificate",
            header: bootstrap,
            description: " Through this course, I gained a strong understanding of Bootstrap 4 and its features,and I am confident in my ability to use Bootstrap 4 to create responsive and mobile-first web applications.I also gained practical experience with popular front-end development tools like npm, Gulp, and Webpack."
        },{
            title:"Server-side Development with NodeJS, Express and MongoDB  ",
            subTitle:"Course Certificate",
            header: mongodb,
            description: "  Through this course, I gained a strong understanding of server-side web development and its technologies,\n" +
                "                            and I am confident in my ability to create scalable and robust server-side applications using NodeJS, Express, and MongoDB.\n" +
                "                            I also gained practical experience with front-end development tools like Bootstrap and jQuery."
        },{
            title:"Introduction to Cloud Computing ",
            subTitle:"Course Certificate",
            header: cloud,
            description: "  Through this course, I gained a strong understanding of cloud computing and its various models and providers.I am confident in my ability to deploy and manage cloud-based applications,as well as to choose the appropriate cloud model and provider for a given use case."
        },{
            title:"Introduction to Agile Development and Scrum",
            subTitle:"Course Certificate",
            header: agile,
            description: " Through this course, I gained a strong understanding of Scrum principles and best practices,\n" +
                "                            and I am confident in my ability to lead and participate in Scrum teams.\n" +
                "                            I also gained practical experience with popular Scrum tools like Jira."
        },
        // Add the remaining certification data objects here
    ];

    return (
        <div className="font-semibold animated fadeInDown">
            <h3 className="text-4xl py-4 mt-5 text-center font-burtons">Certifications:</h3>
            <div className="flex flex-wrap mx-4 mb-3">
                {certificationData
                    .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                    .map((certification, index) => (
                        <div key={index} className="w-full md:w-1/3 px-4 mt-5">

                            <Card
                                title={certification.title}
                                subTitle={certification.subTitle}
                                header={<div className="px-4 pt-4 relative">{certification.header}<div className="sale-logo3" style={{backgroundColor:"blueviolet"}}>RECENT</div>
                                </div>}

                                className="md:w-25rem h-full"
                                style={{ backgroundColor: '#F5F3F6E0' }}
                            >
                                <p className="m-0">{certification.description}</p>
                            </Card>
                        </div>
                    ))}
            </div>
            <Paginator
                first={currentPage * itemsPerPage}
                rows={itemsPerPage}
                totalRecords={certificationData.length}
                onPageChange={(e) => setCurrentPage(e.page)}
                className="p-jc-center"
            />
        </div>
    );

}
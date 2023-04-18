import React from "react"
import { Card } from 'primereact/card';
import reactcertif from "../images/fullstackr.png"
import devopscertif from "../images/devops.png"
import agilecertif from "../images/agile.png"



export default function Certifications(){
    const react = <img alt="logo" src={reactcertif}  height="10"  className="rounded-lg"></img>;
    const devops = <img alt="logo" src={devopscertif}  height="10"  className="rounded-lg"></img>;
    const agile = <img alt="logo" src={agilecertif}  height="10"  className="rounded-lg"></img>;

    return(



        <div>
            <h3 className="text-4xl py-4 mt-7  text-center font-burtons ">Certifications:</h3>


            <div className="flex flex-wrap mx-4">
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Full Stack Web Development with React"
                        header={<div className="px-4 pt-4 " >{react}</div>}
                        className="md:w-25rem "
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
                        title="Title 1"
                        subTitle="Subtitle 1"
                        header={<div className="px-4 pt-4 " >{devops}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
                            deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Title 3"
                        subTitle="Subtitle 3"
                        header={<div className="px-4 pt-4 " >{agile}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
                            deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                            neque quas!
                        </p>
                    </Card>
                </div>
            </div>

        </div>

    );
}
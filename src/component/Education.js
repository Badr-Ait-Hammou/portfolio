
import { Card } from 'primereact/card';
import logo from "../images/whitelogo.svg";
import React from "react";
import fst from "../images/fst.png"
import emsi from "../images/emsi1.png"

export default function Education() {

    return (
        <div >


            <main className=" bg-white px-10  md:px-20  mt-5 " >
                <section className="min-h-screen">

                    <div className="mt-5">
                        <h3 className="text-4xl py-1  text-center  font-semibold ">Education:</h3>
                       <Card>

                        <p className="text-center font-medium mt-5" >
                            Thanks to self education and these two establishments, I have a strong educational background in computer science.

                        </p>
                       </Card>
                    </div>
                    <div className="mt-5">
                        <Card  >
                            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                            <img alt="logo" src={fst} height="20" width="80" className="p-mr-2"/>
                            </div>
                            <p className="text-center font-semibold mt-5" >
                                I obtained my bachelor s degree in Computer Science from  <span className="text-teal-500"> Sciences and technologies University </span>"FST",</p>
                            <p className="text-center font-semibold mt-5" >
                                where I gained a solid foundation in programming languages, and algorithms.
                            </p>
                        </Card>
                    </div>
                    <div className="mt-5">
                        <Card  >
                            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                <img alt="logo" src={emsi} height="20" width="80" className="p-mr-2"/>
                            </div>
                            <p className="text-center font-semibold mt-5" >
                                I am closer to complete my engineering education at <span className="text-teal-500"> EMSI </span> School,
                            </p>
                            <p className="text-center font-semibold mt-5" >
                                where I deepened my understanding of computer architecture,
                            </p>
                            <p className="text-center font-semibold mt-5" >
                                operating systems, and databases.
                            </p>
                        </Card>
                    </div>
                    <div>
                        <Card  className="mt-5" >

                            <p className="text-center font-medium mt-5" >
                                Through both of these educational experiences,
                                I have developed a strong analytical and problem-solving skills,
                            </p>
                            <p className="text-center font-medium mt-5" >
                                which have been essential to my success in this field.
                            </p>


                        </Card>
                    </div>
                </section>

            </main>
        </div>
    );
}

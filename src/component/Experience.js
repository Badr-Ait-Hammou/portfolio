import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import logo from "../images/logo.svg"
import fst from "../images/fst.png";
import emsi from "../images/emsi1.png";





export default  function Experience(){
return(
    <div >


        <main className=" bg-white px-10  md:px-20  mt-5 " >
            <section className="min-h-screen">

                <div className="mt-5">
                    <h3 className="text-4xl py-1  text-center  font-semibold mt-5 ">Experience:</h3>

                </div>
                <div className="mt-5">
                    <Card  >
                        <div  className="font-extrabold" >
                        <p>Final Course Project Internship (PFE)</p>
                        </div>
                        <div>
                        <p className="mt-2 font-light">April 2022--Jun 2022</p>
                        </div>
                        <div  className="font-normal mt-2" >
                            <p>Nano Planete -Marrakech</p>
                                <p className="mt-2 font-semibold">Design and development of a web application for selling biomedical equipment and training courses. </p>

                        </div>

                    </Card>
                </div>
                <div className="mt-5">
                    <Card  >
                        <div  className="font-extrabold" >
                            <p>Summer Course Internship </p>
                        </div>
                        <div>
                            <p className="mt-2 font-light"> Jun 2022--August 2022</p>
                        </div>
                        <div  className="font-normal mt-2" >
                            <p>ZSMART -Marrakech</p>
                            <p className="mt-2 font-semibold"> Design and development of a desktop application for "Inventory management". </p>

                        </div>

                    </Card>
                </div>

                <div className="mt-5">
                    <Card  >
                        <div  className="font-extrabold" >
                            <p>Summer Course Internship </p>
                        </div>
                        <div>
                            <p className="mt-2 font-light"> July 2023--August 2023</p>
                        </div>
                        <div  className="font-normal mt-2" >
                            <p>******</p>
                            <p className="mt-2 font-semibold"> ***** </p>

                        </div>

                    </Card>
                </div>

            </section>

        </main>
    </div>
    );
}
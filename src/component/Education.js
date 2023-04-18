


import 'swiper/css';



import profile from "../images/personnalphoto.jpg"

import { Card } from 'primereact/card';


export default function Education() {

    return (
        <div >


            <main className=" bg-white px-10  md:px-20  mt-5 " >
                <section className="min-h-screen">

                    <div>
                        <h3 className="text-4xl py-1  text-center dark:text-white font-burtons ">Education:</h3>
                        <p className="text-md py-2  text-center leading-8 text-gray-800 dark:text-gray-200">
                            Thanks to self education and these two establishments, I have a strong educational background in computer science.
                        </p>

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

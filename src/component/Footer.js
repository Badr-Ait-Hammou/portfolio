import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import "../styles/footer.css"

import logo from "../images/whitelogo.svg"


export default function Footer() {





    return (
        <div className="footer-dark" style={{marginTop:"40px"}}>
            <footer>
                <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                    alt="logo"
                    src={logo}
                    height="20"
                    width="70"
                    className="p-mr-2"


                /></div>



                <div style={{ display: 'grid', justifyContent: 'center' }}>

                    <div className="text-center ">
                        <div className=" item text tex">


                            <p>Feel free to reach out to me if you have any questions or if you'd like to work together on a project.</p>
                        </div>

                        <div className="col item social">
                            <a href="#"><RiTelegramFill/></a>
                            <a href="https://www.linkedin.com/in/badr-ait-hammou-24357b233/"><TiSocialLinkedin/></a>
                            <a href="https://twitter.com/Badr66270786"><AiFillTwitterCircle/></a>
                        </div>
                    </div>
                    <a className="text-center font-light mt-2"  href="https://github.com/Badr-Ait-Hammou">B.A.H © 2023</a>
                </div>


            </footer>
        </div>
    );
}

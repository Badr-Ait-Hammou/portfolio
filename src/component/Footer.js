import React from "react";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillTwitterCircle } from 'react-icons/ai';
import "../styles/footer.css"
import logo from "../images/whitelogo.svg"
import {Link} from "react-router-dom";
import {AiOutlineGithub} from "react-icons/ai";



export default function Footer() {


    return (
        <div className="footer-dark" style={{marginTop:"15px"}}>
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


                        <div className="col item social">
                            <Link
                                style={{ textDecoration: "none",fontFamily:"better" }}
                                to={`https://github.com/Badr-Ait-Hammou`}
                            ><AiOutlineGithub/></Link>
                            <a href="https://www.linkedin.com/in/badr-ait-hammou-24357b233/"><TiSocialLinkedin/></a>
                            <a href="https://twitter.com/Badr66270786"><AiFillTwitterCircle/></a>
                        </div>
                    </div>
                    <a className="text-center font-light mt-2 font-burtons copyright"  href="https://github.com/Badr-Ait-Hammou">Developed & Designed By © AIT_HAMMOU</a>
                </div>


            </footer>
        </div>
    );
}

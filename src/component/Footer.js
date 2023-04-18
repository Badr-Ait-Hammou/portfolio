import React from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import "../styles/footer.css"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import logo from "../images/whitelogo.svg"


export default function Footer() {





    return (
        <div className="footer-dark" style={{marginTop:"50px"}}>
            <footer>
                <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                    alt="logo"
                    src={logo}
                    height="20"
                    width="70"
                    className="p-mr-2"


                /></div>
                <div className="mx-8" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="p-inputgroup mb-2" style={{ width: '400px', fontSize: '14px' }}>
                        <Button icon="pi pi-user"  />

                        <InputText placeholder="Email" className="p-inputtext-sm" />
                    </div>
                    <div className="p-inputgroup mb-2" style={{ width: '400px', fontSize: '14px' }}>
                        <Button icon="pi pi-user"  />
                        <InputText placeholder="subject" className="p-inputtext-sm" />
                    </div>
                    <div className="p-inputgroup mb-2" style={{ width: '400px', fontSize: '14px' }}>
                        <Button icon="pi pi-user"  />
                        <InputText placeholder="message" className="p-inputtext-sm" />
                    </div>
                </div>


                <div style={{ display: 'grid', justifyContent: 'center' }}>

                    <div className="text-center mt-5">
                        <div className=" item text tex">

                            <h3>Contact Me</h3>
                            <p>Feel free to reach out to me if you have any questions or if you'd like to work together on a project.</p>
                        </div>



                        <div className="col item social">
                            <a href="#"><RiTelegramFill/></a>
                            <a href="#"><RiFacebookCircleFill/></a>
                            <a href="#"><AiFillTwitterCircle/></a>
                            <a href="#"><RiInstagramFill/></a></div>
                    </div>

                    <p className="copyright">B.A.H © 2023</p>
                </div>


            </footer>
        </div>
    );
}

import React, {useState} from "react";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import "../styles/footer.css"
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import logo from "../images/whitelogo.svg"


export default function Footer() {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);

    const load = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    function handleSubmit() {
        if (email.trim() === '' || subject.trim() === '' || message.trim() === '') {
            const confirmed = window.confirm('Please fill in all fields before submitting.');
            if (!confirmed) {
                return;
            }
        }

        setLoading(true);

        // do your form submission logic here, e.g. with axios
    }

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
                        <Button icon="pi pi-user" />
                        <InputText placeholder="Email" className="p-inputtext-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="p-inputgroup mb-2" style={{ width: '400px', fontSize: '14px' }}>
                        <Button icon="pi pi-angle-double-right" />
                        <InputText placeholder="subject" className="p-inputtext-sm" value={subject} onChange={(e) => setSubject(e.target.value)} />
                    </div>
                    <div className="p-inputgroup mb-2" style={{ width: '400px', fontSize: '14px' }}>
                        <Button icon="pi pi-ticket" />
                        <InputText placeholder="message" className="p-inputtext-sm" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div className="card flex flex-wrap justify-content-center gap-3 mt-3" >
                        <Button label="Send" icon="pi pi-check" loading={loading} onClick={handleSubmit} />
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
                            <a href="https://www.linkedin.com/in/badr-ait-hammou-24357b233/"><TiSocialLinkedin/></a>
                            <a href="https://twitter.com/Badr66270786"><AiFillTwitterCircle/></a>
                        </div>
                    </div>

                    <p className="copyright">B.A.H © 2023</p>
                </div>


            </footer>
        </div>
    );
}

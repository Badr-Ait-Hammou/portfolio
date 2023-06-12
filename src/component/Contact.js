/*import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import emailjs from 'emailjs-com';


export default function Contact(){

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
    function sendEmail() {
        const templateParams = {
            from_email: email,
            to_name: 'Badr', // Replace with the recipient's name
            subject: subject,
            message_html: message
        };

        emailjs.send('service_525rkkb', 'template_zhm3n8t', templateParams, '-D16ZaD03BCicE0N1')
            .then(function(response) {
                console.log('Email sent successfully!', response);
                setLoading(false);
            }, function(error) {
                console.error('Email sending failed:', error);
                setLoading(false);
            });
    }







    function handleSubmit() {
        if (email.trim() === '' || subject.trim() === '' || message.trim() === '') {
            const confirmed = window.confirm('Please fill in all fields before submitting.');
            if (!confirmed) {
                return;
            }
        }

        setLoading(true);
        sendEmail();
    }

    return (
        <div className="mx-8 "  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <div className="mt-7">
                <h3 className="text-4xl py-1  text-center  font-semibold ">Contact Me:</h3>
            </div>
            <div className="p-inputgroup mb-2 mt-24" style={{ width: '400px', fontSize: '14px' }}>
                <Button icon="pi pi-user" />
                <InputText placeholder="Email" className="p-inputtext-sm" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="p-inputgroup mb-2 mt-5" style={{ width: '400px', fontSize: '14px' }}>
                <Button icon="pi pi-angle-double-right" />
                <InputText placeholder="subject" className="p-inputtext-sm" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div className="p-inputgroup mb-2 mt-5" style={{ width: '400px', fontSize: '14px' }}>
                <Button icon="pi pi-ticket" />
                <InputText placeholder="message" className="p-inputtext-sm" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <div className="card flex flex-wrap justify-content-center gap-3 mt-10">
                <Button label="Send" icon="pi pi-check" loading={loading} onClick={handleSubmit} />
            </div>
        </div>
    );
};
*/

import React,{useRef} from "react";
import emailjs from "@emailjs/browser";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from "primereact/inputtextarea";
import "../styles/contact.css"
import { Toast } from 'primereact/toast';



export default function Contact() {

    const toast = useRef(null);




    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Sent Successfully',className:"font-burtons ", life: 3000});
    }

    const showError = () => {
        toast.current.show({severity: 'warn', summary: 'Warning', detail:'One of the Input Fields is Empty', className:"font-burtons",life: 3000});
    }

    const sendEmail = (e) => {
        e.preventDefault();

        // Get the form inputs
        const userName = document.querySelector('input[name="user_name"]').value;
        const userEmail = document.querySelector('input[name="user_email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Check if any of the inputs are empty
        if (!userName || !userEmail || !message) {
            console.log("Please fill in all the fields.");
            showError();
            return;
        }

        emailjs.sendForm(
            "service_525rkkb",
            "template_zhm3n8t",
            "#fm",
            "-D16ZaD03BCicE0N1"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    showSuccess();
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };


    return (
                <form id="fm" className="fm" onSubmit={sendEmail}>
                    <div>
                        <div className="starsec"></div>
                        <div className="starthird"></div>
                        <div className="starfourth"></div>
                        <div className="starfifth"></div>
                    </div>
                    <Toast position="top-center"  ref={toast} />
                    <div className="mx-8 "  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <div className="mt-7">
                            <h3 className="text-4xl py-1 text-center font-burtons animated fadeInDown">Contact Me:</h3>
                        </div>
                        <div className="p-inputgroup mb-2 mt-24 font-semibold animated fadeInDown" style={{ width: '400px', fontSize: '14px' }}>
                            <Button icon="pi pi-user" />
                            <InputText type="text" name="user_name"  placeholder="Your Name" />
                        </div>
                        <div className="p-inputgroup mb-2 mt-5 font-semibold animated fadeInDown" style={{ width: '400px', fontSize: '14px' }}>
                            <Button icon="pi pi-angle-double-right" />
                            <InputText  type="email" name="user_email" placeholder="Email"  />
                        </div>
                        <div className="p-inputgroup mb-2 mt-5 font-semibold animated fadeInDown" style={{ width: '400px', fontSize: '14px' }}>
                            <Button icon="pi pi-ticket" />
                            <InputTextarea  name="message" cols="5" rows="5" placeholder="Message"  />
                        </div>
                        <div className=" gap-3 mt-10 mb-3 font-semibold animated fadeInDown">
                            <Button type="submit" label="Send" value="Send" icon="pi pi-check"  />
                        </div>
                    </div>

                </form>

    )
}

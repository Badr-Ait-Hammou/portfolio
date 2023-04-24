import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

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

    function handleSubmit() {
        if (email.trim() === '' || subject.trim() === '' || message.trim() === '') {
            const confirmed = window.confirm('Please fill in all fields before submitting.');
            if (!confirmed) {
                return;
            }
        }

        setLoading(true);


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

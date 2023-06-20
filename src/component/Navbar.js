
import {useNavigate} from "react-router-dom";

import logo from "../images/logo.svg"
import React from 'react';
import { Menubar } from 'primereact/menubar';
import resume from "../images/resume.pdf"

export default function Navbar() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'About me',
            icon: 'pi pi-fw pi-user',
            command: () => {navigate('/') }
        },
        {
            label: 'Education',
            icon: 'pi pi-fw pi-book',
            command: () => {navigate('/education') }
        },
        {
            label: 'Certifications',
            icon: 'pi pi-fw pi-verified',
            command: () => {navigate('/certification') }
        },
        {
            label: 'Projects',
            icon: 'pi pi-fw pi-slack',
            command: () => {navigate('/projects') }
        },
        {
            label: 'Experience',
            icon: 'pi pi-spin pi-spinner',
            command: () => {navigate('/experience') }

        },
        {
            label: 'My Services',
            icon: 'pi pi-bolt',
            command: () => {navigate('/services') }
        },
        {
            label: 'Contact',
            icon: 'pi pi-mobile',
            command: () => {navigate('/contact') }
        },
        {
            label: 'More',
            icon: 'pi pi-plus',

            items: [
                {
                    label: 'Recommendations',
                    icon: 'pi pi-star-fill',
                    command: () => {navigate('/certificats') },
                },
                {
                    label: 'Resume',
                    icon: 'pi pi-fw pi-file-pdf',
                    command: () => {
                        window.open(resume, '_blank');
                    }
                }
            ]

        },


       
    ];
    const style = {
        backgroundColor: 'rgba(245,243,246,0.88)',
        color: '#230202',
        borderRadius:"10px",
        justifyContent: 'left'
    };


    const end = (
        <img
            alt="logo"
            src={logo}

            width="50"
            //className="p-mr-2"
            className="mr-2"
        />
    );



    return (
        <div>
            <div className="card">
                <Menubar  end={end} style={style}  model={items}  />

            </div>
        </div>
    );

}


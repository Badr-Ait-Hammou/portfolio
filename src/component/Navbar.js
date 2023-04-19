import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

import logo from "../images/logo.svg"
import React, {useEffect} from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';

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
            label: 'Resume',
            icon: 'pi pi-fw pi-print',
            command: () => {navigate('/resume') }
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-mobile',
            command: () => {navigate('/contact') }
        }
    ];
    const style = {
        backgroundColor: 'rgba(245,243,246,0.88)',
        color: '#230202',
        borderRadius:"20px",
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

    useEffect(() => {
        const handlePopstate = () => {
            navigate('/');
        };
        window.addEventListener('popstate', handlePopstate);
        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, [navigate]);

    return (
        <div>
            <div className="card">
                <Menubar  end={end} style={style}  model={items}  />

            </div>
        </div>
    );

}


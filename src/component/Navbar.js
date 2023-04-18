import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';
import {useNavigate} from "react-router-dom";

import logo from "../images/logo.svg"
import React from 'react';
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
            label: 'Experience',
            icon: 'pi pi-fw pi-user',
            command: () => {navigate('/experience') }
        },
        {
            label: 'Projects',
            icon: 'pi pi-fw pi-user',
            command: () => {navigate('/projects') }
        },
        {
            label: 'Resume',
            icon: 'pi pi-fw pi-user',
            command: () => {navigate('/resume') }
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-mobile',
            command: () => {navigate('/contact') }
        }
    ];
    const style = {
        backgroundColor: 'rgb(234,230,230)',
        color: '#230202',
        borderRadius:"20px",
        justifyContent: 'left'
    };

  //  const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholders.png'} height="100" className="mr-2"></img>;
   // const end = <InputText placeholder="Search" type="text" />;
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


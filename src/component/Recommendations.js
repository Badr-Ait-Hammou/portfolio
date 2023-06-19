import React from "react"
import "../styles/workingonit.css"
import {Card} from "primereact/card";
import { ProgressSpinner } from 'primereact/progressspinner';

export default function Recommendations(){
    return(
        <Card>
        <div className="card "  >
            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>



            <section className="error">
                <div className="error__content">
                    <div className="error__message message">
                        <ProgressSpinner style={{width: '50px', height: '50px',marginBottom:'5px'}} strokeWidth="3" fill="var(--surface-ground)" animationDuration=".9s" />

                        <h1 className="message__title" >WORK IN PROGRESS</h1>
                        <p className="message__text" style={{fontFamily:"Peralta"}}>I am currently working on this part.</p>
                    </div>


                </div>
            </section>
        </div>
        </Card>


    );
}
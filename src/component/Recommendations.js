import React from "react"
import "../styles/workingonit.css"
export default function Recommendations(){
    return(
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
                        <h1 className="message__title" >WORK IN PROGRESS</h1>
                        <p className="message__text"style={{fontFamily:"Peralta"}}>I am currently working on improving this part.</p>
                    </div>


                </div>
            </section>
        </div>



    );
}
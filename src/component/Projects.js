import React from "react";
import {Card} from "primereact/card";

import { Button } from 'primereact/button';
import nanoproduit from "../images/nanoproduit.png";
import nanologin from "../images/nanologin.png";
import csharpacc from "../images/csharpacceuil.png";
import csharpproduit from "../images/csharpproduit.png";
import nanopr from "../images/pr.png";
import poko from "../images/pokedex2.png";
import pharmacie from "../images/homepagepharmacy.png";
import maps from "../images/map.png";
import allpharmacies from "../images/pharmacies.png";
import restaurantsm from "../images/restauranthomesmall.png";

import {Link} from "react-router-dom";
import "../styles/contact.css"

export default  function Projects(){
    const po = <img alt="logo" src={poko}  height="10"  className="rounded-lg"></img>;
    const nanolog = <img alt="logo" src={nanologin}  height="10"  className="rounded-lg"></img>;
    const nanoprod = <img alt="logo" src={nanoproduit}  height="10"  className="rounded-lg"></img>;
    const csharpac = <img alt="logo" src={csharpacc}  height="10"  className="rounded-lg"></img>;
    const csharproduit = <img alt="logo" src={csharpproduit}  height="10"  className="rounded-lg"></img>;
    const nanopro = <img alt="logo" src={nanopr}  height="10"  className="rounded-lg"></img>;
    const pharmacyhome = <img alt="logo" src={pharmacie}  height="10"  className="rounded-lg"></img>;
    const mappharmacy = <img alt="logo" src={maps}  height="10"  className="rounded-lg"></img>;
    const pharmacies = <img alt="logo" src={allpharmacies}  height="10"  className="rounded-lg"></img>;
    const rest = <img alt="logo" src={restaurantsm}  height="10"  className="rounded-lg"></img>;

    return(
        <div className="font-semibold animated fadeInDown">
            <h3 className="text-4xl py-6  text-center  font-burtons ">Some Of My Projects:</h3>

            <div className="flex flex-wrap mx-4">
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Nano Planete E_commerce App"
                        subTitle="Spring boot / Angular application"
                        header={<div className="px-4 pt-4 " >{nanopro}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >

                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title=" Products Page"
                        subTitle="Spring boot / Angular application"
                        header={<div className="px-4 pt-4 " >{nanoprod}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >

                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title=" Login Page"
                        subTitle="Spring boot / Angular application"
                        header={<div className="px-4 pt-4 " >{nanolog}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >

                    </Card>
                </div>
            </div>

            <div className="flex flex-wrap mx-4">
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Para pharmacy App"
                        subTitle="C#"
                        header={<div className="px-4 pt-4 " >{csharproduit}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <Link
                            style={{ textDecoration: "none", color: "black",fontFamily:"better" }}
                            to={`https://github.com/Badr-Ait-Hammou/Gestion-de-stock-parapharmacie`}
                        >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    label="Check it out"
                                    style={{
                                        backgroundColor: "#08717c",
                                    }}
                                />
                            </div>

                        </Link>
                    </Card>
                </div>
                <div className="w-full  md:w-1/3 px-4 mt-5">
                    <Card
                        title="Para pharmacy App"
                        subTitle="C#"
                        header={<div className="px-4 pt-4 " >{csharpac}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <Link
                            style={{ textDecoration: "none", color: "black",fontFamily:"better" }}
                            to={`https://github.com/Badr-Ait-Hammou/Gestion-de-stock-parapharmacie`}
                        >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    label="Check it out"
                                    style={{
                                        backgroundColor: "#08717c",
                                    }}
                                />
                            </div>

                        </Link>
                    </Card>
                </div>
                <div className="w-full  md:w-1/3 px-4 mt-5">
                    <Card
                        title="Flutter Pokedex App"
                        subTitle="Dart"
                        header={<div className="px-4 pt-4 " >{po}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <Link
                            style={{ textDecoration: "none", color: "black",fontFamily:"better" }}
                            to={`https://github.com/Badr-Ait-Hammou/Pokedex_Flutter`}
                        >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    label="Check it out"
                                    style={{
                                        backgroundColor: "#08717c",
                                    }}
                                />
                            </div>

                        </Link>
                    </Card>
                </div>
            </div>

            <div className="flex flex-wrap mx-4">
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="pharmacy Location App"
                        subTitle="Spring boot /React"
                        header={<div className="px-4 pt-4 " >{pharmacyhome}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <Link
                            style={{ textDecoration: "none", color: "black",fontFamily:"better" }}
                            to={`https://github.com/Badr-Ait-Hammou/localisation_pharmacie_front`}
                        >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    label="Check it out"
                                    style={{
                                        backgroundColor: "#08717c",
                                    }}
                                />
                            </div>

                        </Link>
                    </Card>
                </div>
                <div className="w-full  md:w-1/3 px-4 mt-5">
                    <Card
                        title="pharmacy Location App"
                        subTitle="Spring boot /React"
                        header={<div className="px-4 pt-4 " >{mappharmacy}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <Link
                            style={{ textDecoration: "none", color: "black",fontFamily:"better" }}
                            to={`https://github.com/Badr-Ait-Hammou/localisation_pharmacie_front`}
                        >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    label="Check it out"
                                    style={{
                                        backgroundColor: "#08717c",
                                    }}
                                />
                            </div>

                        </Link>
                    </Card>
                </div>
                <div className="w-full  md:w-1/3 px-4 mt-5">
                    <Card
                        title="pharmacy Location App"
                        subTitle="Spring boot /React"
                        header={<div className="px-4 pt-4 " >{pharmacies}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <Link
                            style={{ textDecoration: "none", color: "black",fontFamily:"better" }}
                            to={`https://github.com/Badr-Ait-Hammou/localisation_pharmacie_front`}
                        >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    label="Check it out"
                                    style={{
                                        backgroundColor: "#08717c",
                                    }}
                                />
                            </div>

                        </Link>

                    </Card>
                </div>

                <div className="w-full  md:w-1/3 px-4 mt-5">
                    <Card
                        title="Restaurant Management App"
                        subTitle="Spring boot /React"
                        header={<div className="px-4 pt-4 " >{rest}</div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <Link
                            style={{ textDecoration: "none", color: "black",fontFamily:"better" }}
                            to={`https://github.com/Badr-Ait-Hammou/Restaurant-Management`}
                        >
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    label="Check it out"
                                    style={{
                                        backgroundColor: "#08717c",
                                    }}
                                />
                            </div>

                        </Link>

                    </Card>
                </div>
            </div>

        </div>
    );
}
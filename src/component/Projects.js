import React from "react";
import {Card} from "primereact/card";
import nanoaceuil from "../images/nanoplanetaccueil.png";
import nanoproduit from "../images/nanoproduit.png";
import nanologin from "../images/nanologin.png";
import pokedex from "../images/pokedex.png";
import csharpacc from "../images/csharpacceuil.png";
import csharpproduit from "../images/csharpproduit.png";
import nanopr from "../images/pr.png";


export default  function Projects(){
    const nanoacc = <img alt="logo" src={nanoaceuil}  height="10"  className="rounded-lg"></img>;
    const nanolog = <img alt="logo" src={nanologin}  height="10"  className="rounded-lg"></img>;
    const nanoprod = <img alt="logo" src={nanoproduit}  height="10"  className="rounded-lg"></img>;
    const csharpac = <img alt="logo" src={csharpacc}  height="10"  className="rounded-lg"></img>;
    const csharproduit = <img alt="logo" src={csharpproduit}  height="10"  className="rounded-lg"></img>;
    const poked = <img alt="logo" src={pokedex}   className="rounded-lg"></img>;
    const nanopro = <img alt="logo" src={nanopr}  height="10"  className="rounded-lg"></img>;

    return(
        <div>
            <h3 className="text-4xl py-6  text-center  font-burtons ">Some Of My Projects:</h3>

            <div className="flex flex-wrap mx-4">
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Nano Planete E_commerce App"
                        subTitle="Spring boot / Angular application"
                        header={<div className="px-4 pt-4 " >{nanopro}</div>}
                        className="md:w-25rem "
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >

                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Products Page"
                        subTitle="Spring boot / Angular application"
                        header={<div className="px-4 pt-4 " >{nanoprod}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >

                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Login Page"
                        subTitle="Spring boot / Angular application"
                        header={<div className="px-4 pt-4 " >{nanolog}</div>}
                        className="md:w-25rem"
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
                        className="md:w-25rem "
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >

                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Para pharmacy App"
                        subTitle="C#"
                        header={<div className="px-4 pt-4 " >{csharpac}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >

                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Flutter Pokedex App"
                        subTitle="Dart"
                        header={<div className="px-4 pt-4 " >{poked}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >

                    </Card>
                </div>
            </div>

        </div>
    );
}
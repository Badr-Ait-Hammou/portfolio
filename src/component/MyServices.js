import React from "react"
import {Card} from "primereact/card";
import csharp from "../images/csh.png";
import reacti from "../images/reacticon.png"
import android from "../images/androidicon.png"
import angular from "../images/angularjsicon.png"
import django from "../images/djangoicon.png"
import flutter from "../images/fluttericon.png"
import python from "../images/pythonicon.png"
import spring from "../images/springbooticon.png"
import kotlin from "../images/kotlenicon.png"
import dart from "../images/darticon.png"
import dotnet from "../images/dotneticon.png"
import native from "../images/nativeicon.png"
import tailwind from "../images/nativeicon.png"


export default  function MyServices(){
    const csharplogo = <img alt="logo" src={csharp}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const iconreact = <img alt="logo" src={reacti}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logodjango = <img alt="logo" src={django}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logotailwind = <img alt="logo" src={tailwind}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logospring = <img alt="logo" src={spring}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logoflutter = <img alt="logo" src={flutter}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logoandroid = <img alt="logo" src={android}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logopython = <img alt="logo" src={python}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logoangular = <img alt="logo" src={angular}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logonative = <img alt="logo" src={native}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logodart = <img alt="logo" src={dart}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logokotlin = <img alt="logo" src={kotlin}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;
    const logodotnet = <img alt="logo" src={dotnet}   className="rounded-lg " style={{maxHeight:'60px',maxWidth:"60px" }}></img>;

    return(
        <div >


            <main className=" bg-white px-10  md:px-20  mt-5 " >
                <section className="min-h-screen">

                    <div className="mt-5 px-3">
                        <h3 className="text-4xl py-1  text-center  font-semibold">Services I Offer:</h3>
                        <Card  className="h-full">

                            <p className="text-md py-2  leading-8 text-center text-gray-800 font-semibold ">
                                Since the beginning of my journey as a software engineer and a designer,
                                I have done remote work for a lot of
                                <span className="text-teal-500"> enterprises </span>
                                ,and collaborated with talented people to develop performant applications.
                                I offer a wide range of services, including brand design and programming.
                            </p>
                        </Card>
                    </div>





                    <div className="mt-7 px-3">
                        <h3 className="text-4xl  py-2 text-center font-semibold mt-10 ">Frameworks And Languages I Use:</h3>



                    </div>
                    <div className="flex flex-wrap mt-5 ">
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {csharplogo}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        C#
                                    </p>
                                </div>

                            </Card>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {iconreact}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        React
                                    </p>

                                </div>



                            </Card>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logopython}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        Python
                                    </p>
                                </div>



                            </Card>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logoflutter}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        Flutter
                                    </p>
                                </div>



                            </Card>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logoandroid}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        Android
                                    </p>
                                </div>



                            </Card>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logospring}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        Spring Boot
                                    </p>
                                </div>



                            </Card>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logoangular}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        Angular
                                    </p>
                                </div>



                            </Card>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logodjango}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        Django
                                    </p>
                                </div>



                            </Card>
                        </div>


                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logodotnet}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        .Net
                                    </p>
                                </div>



                            </Card>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logokotlin}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        Kotlin
                                    </p>
                                </div>



                            </Card>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logodart}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        Dart
                                    </p>
                                </div>



                            </Card>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mt-5">
                            <Card className="h-full  pt-4 justify-center "
                                  header={
                                      <div className="px-4 pt-4 flex items-center justify-center">
                                          {logonative}
                                      </div>
                                  }
                            >
                                <div className="font-extrabold" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <p className="py-2 text-blue-400 font-bold text-1xl">
                                        React Native
                                    </p>
                                </div>



                            </Card>
                        </div>

                    </div>


                </section>

            </main>
        </div>
    );
}
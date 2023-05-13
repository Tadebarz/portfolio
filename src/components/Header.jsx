import React from "react";
import Navbar from "./Navbar";
import LightSpeed from 'react-reveal/LightSpeed';

const Header = () => {
    return (
        <>
            <section className="">
                <div class="container overflow-hidden text-center header">
                    <Navbar>
                    </Navbar>
                    <div class="row ">
                        <div class="col-lg-6">
                            <img src="/image/astro3.png" className="astro" alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div class="col-lg-6 mt-5">
                            <div class="titulo  mt-5 "> &lt;Transformando ideas en codigo/&gt;	</div>
                            <h3 className="subtitulo  mt-5 fs-2">Este es el portfolio de un programador junior en constante evolucion </h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header
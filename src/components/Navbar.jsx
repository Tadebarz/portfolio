import React from "react";

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg d-none d-lg-block mb-5">
                <div class="container-fluid">
                    <a class="navbar-brand fs-2 me-5 text-light" href="#">Tadeo Barzelli</a>
                    <button class="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">

                    </div>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-light fs-5 me-2" aria-current="page" href="#about">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light fs-5 me-2" href="#works">Works</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light fs-5 me-2" href="#contacto">Contact</a>
                        </li>

                    </ul>
                </div>
            </nav>
            <nav class="navbar navbar-expand-lg  d-lg-none" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-light" href="#">Tadeo Barzelli</a>
                    <button class="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-light"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
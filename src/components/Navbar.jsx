import React from "react";

const Navbar = () => {
    return (
        <>
            <nav class="navbar  mb-5"
            data-bs-theme="dark">
                <div class="container">
                    <a class="navbar-brand fs-2 text-light" href="#">Tadeo Barzelli</a>
                    
                    <button class="navbar-toggler text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="offcanvas offcanvas-end nav" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title text-light  fs-3" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active text-light fs-3" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light fs-3" href="#">About me</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light fs-3" href="#">Works</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-light fs-3" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
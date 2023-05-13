import React from "react";




const AboutMe = () => {


    return (
        <>
            <div className="container about-me">
            <h1 className="">About me</h1>

                <div className="row">
                    <div className="col-lg-6  mt-5">
                        <div class="card card-style" style={{ width:'83%'}}>
                            <img src="./image/cv.png" class="cv-image" alt="..." />
                            <br></br>
                            <div class="card-body">
                                <h1 class="card-title text-light mb-3 fs-1 ">Tadeo Barzelli</h1>
                                <p class="card-text text-light fs-5 p-1">Some quick example text to build on the card titlo Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi autem, nemo aliquid libero vitae voluptates molestiae unde, animi possimus mollitia quod sit tenetur odio ex, voluptatibus eum! Earum, similique hic!</p>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 skills">
                        <h1>Habilidades</h1>
                        <p className="fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, ut?</p>
                        <div class="progress mt-5 mb-5 progress-container" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar skill-bar fs-6" style={{ width: '75%' }}>React</div>
                        </div>
                        <div class="progress mt-4 mb-5  progress-container " role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar skill-bar fs-6" style={{ width: '80%' }}>HTML</div>
                        </div>
                        <div class="progress mt-4 mb-5  progress-container" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar skill-bar fs-6" style={{ width: '73%' }}>Javascript</div>
                        </div>
                        <div class="progress mt-4 mb-5  progress-container" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar skill-bar fs-6" style={{ width: '68%' }}>SQL</div>
                        </div>
                        <div class="progress mt-4 mb-5 progress-container" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar skill-bar fs-6" style={{ width: '65%' }}>Node.js</div>
                        </div>
                        <div class="progress mt-4 mb-5  progress-container" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar skill-bar fs-6" style={{ width: '75%' }}>CSS</div>
                        </div>
                        <div class="progress mt-4 mb-5  progress-container" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar skill-bar fs-6" style={{ width: '75%' }}>Bootstrap</div>
                        </div>
                        <div class="progress mt-4 progress-container" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar skill-bar fs-6" style={{ width: '75%' }}>Scrum</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutMe;
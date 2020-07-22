import React, { Component } from 'react';
import profile from './images/profile-image2.jpg';
import imgOne from './images/imgOne.jpg';
import imgTwo from './images/imageTwo.jpg';
import imgThree from './images/imgThree.jpg';
import imgFour from './images/imgFour.jpg';
import imgFive from './images/imgFive.jpg';

class Portfolio extends Component {
  render() {

    return (
      <div className="row Portfolio-container p-2">
        <div className="col-md-4 profile-div p-5">
            <img src={profile} alt="profile image" width="100%"/>
            <h3 className="profile-title mt-3">Ijeomah Chinedu Princewill</h3>
            <p className="stack-name">Frontend Developer</p>
            Tech Enthusiast and Software Developer focused on building User friendly UIs with much attention to aesthetics and great user experience. 

        </div>

        <div className="col-md-8 p-5">

            <h5 className="m-3">Stacks</h5>
            <span className="col-2"><i className="fa fa-asterisk text-success" aria-hidden="true"></i> ReactJs</span>
            <span className="col-2"><i className="fa fa-asterisk text-success" aria-hidden="true"></i> Bootsrap</span>
            <span className="col-2"><i className="fa fa-asterisk text-success" aria-hidden="true"></i> NodeJs</span>
            <span className="col-2"><i className="fa fa-asterisk text-success" aria-hidden="true"></i> Laravel</span>
            <span className="col-2"><i className="fa fa-asterisk text-success" aria-hidden="true"></i> Codeigniter</span>

            <h5 className="m-3 mt-5">Portfolio</h5>

            <div className="accordion accordion-bg" id="accordionExample275">
                <div className="card accordion-bg z-depth-0 bordered">
                    <div className="card-header" id="headingOne2">
                        <p className="mb-0">
                            <button className="accordion-div" type="button" data-toggle="collapse" data-target="#collapseOne2"
                            aria-expanded="true" aria-controls="collapseOne2">
                            Team Work App
                            </button>
                        </p>
                    </div>
                    <div id="collapseOne2" className="collapse" aria-labelledby="headingOne2"
                    data-parent="#accordionExample275">
                    <div className="card-body">
                        <div className="row my-4">
                            <div className="col-md-4 pt-2">
                                <div className="view z-depth-1">
                                <img src={imgOne} alt="project one" width="100%" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <p className="">A web application for teams to manage their projects. It is developed using NodeJs as the backend stack with ReactJs and Bootstrap for the frontend</p>
                                <p className="mb-0">
                                    <a className="btn btn-success" href="http://ecocms.000webhostapp.com/twk" target="_blank">
                                        Go to website
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card accordion-bg z-depth-0 bordered">
                    <div className="card-header" id="headingTwo2">
                    <p className="mb-0">
                        <button className="accordion-div collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                        University Students' Portal
                        </button>
                    </p>
                    </div>
                    <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2"
                    data-parent="#accordionExample275">
                    <div className="card-body">
                    <div className="row my-4">
                            <div className="col-md-4 pt-2">
                                <div className="view z-depth-1">
                                <img src={imgTwo} alt="project two" width="100%" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <p className="">A web based Students' Management Portal for tertiary institutions. It is developed using Codeigniter as the backend stack with Bootstrap for the frontend</p>
                                <p className="mb-0">
                                    <a className="btn btn-success" href="https://unihezportal.com.ng/v2" target="_blank">
                                        Go to website
                                    </a>    
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="card accordion-bg z-depth-0 bordered">
                    <div className="card-header" id="headingThree2">
                    <p className="mb-0">
                        <button className="accordion-div collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">
                        Business Management App
                        </button>
                    </p>
                    </div>
                    <div id="collapseThree2" className="collapse" aria-labelledby="headingThree2"
                    data-parent="#accordionExample275">
                    <div className="card-body">
                    <div className="row my-4">
                        <div className="col-md-4 pt-2">
                            <div className="view z-depth-1">
                            <img src={imgThree} alt="project three" width="100%" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <p className="">A web based application for inventory and sales Management of Renewable Energy Firm. It is developed using Laravel as the backend stack and Bootstrap for the frontend</p>
                            <p className="mb-0">
                                <a className="btn btn-success" href="http://ceopc.000webhostapp.com" target="_blank">
                                    Go to website
                                </a>    
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="card accordion-bg z-depth-0 bordered">
                    <div className="card-header" id="headingFour2">
                    <p className="mb-0">
                        <button className="accordion-div collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseFour2" aria-expanded="false" aria-controls="collapseFour2">
                        Vehicle Documentation App
                        </button>
                    </p>
                    </div>
                    <div id="collapseFour2" className="collapse" aria-labelledby="headingFour2"
                    data-parent="#accordionExample275">
                    <div className="card-body">
                    <div className="row my-4">
                        <div className="col-md-4 pt-2">
                            <div className="view z-depth-1">
                            <img src={imgFour} alt="project four" width="100%" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <p className="">A web application for Vehicle Documentation in Anambra State. It is developed using Codeigniter as the backend stack with Bootstrap for the frontend</p>
                            <p className="mb-0">
                                <a className="btn btn-success" href="https://mvas.online" target="_blank">
                                    Go to website
                                </a>    
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <div className="card accordion-bg z-depth-0 bordered">
                    <div className="card-header" id="headingFive2">
                    <p className="mb-0">
                        <button className="accordion-div collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseFive2" aria-expanded="false" aria-controls="collapseFive2">
                        Todo App
                        </button>
                    </p>
                    </div>
                    <div id="collapseFive2" className="collapse" aria-labelledby="headingFive2"
                    data-parent="#accordionExample275">
                    <div className="card-body">
                    <div className="row my-4">
                        <div className="col-md-4 pt-2">
                            <div className="view z-depth-1">
                            <img src={imgFive} alt="project five" width="100%" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <p className="">A web application for keeping track of one's tasks. It is developed using Python Django as the backend stack with ReactJs and Bootstrap for the frontend</p>
                            <p className="mb-0">
                                <a className="btn btn-success" href="http://ecocms.000webhostapp.com/rd-todo" target="_blank">
                                    Go to website
                                </a>    
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            
      </div>
    );
  }
}

export default Portfolio;

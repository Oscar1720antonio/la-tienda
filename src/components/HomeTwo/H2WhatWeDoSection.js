import React, {Component} from 'react';
import Link from "next/link";

class H2WhatWeDoSection extends Component {
	render() {
		return (
			<div className="we-do-area pt-110 pb-85">
				<div className="container">
					<div className="row">
						<div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
							<div className="section-title text-center section-circle mb-70">
								<div className="section-img">
									<img src={require("../../../public/assets/img/shape/1.png")} alt="shape"/>
								</div>
								<h1>What We Do</h1>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmotempor incididunt ut labore et dolore magna aliqua enim minim veniam</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="we-do-wrapper text-center mb-30">
								<div className="we-do-img">
									<img src={require("../../../public/assets/img/icon/icon1.png")} alt="icon"/>
								</div>
								<div className="we-do-text">
									<h4><a href="#">Natarul Food</a></h4>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p>
									<Link href="/services" as="/services" >
										<a>
											Read More <i className="dripicons-arrow-thin-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="we-do-wrapper text-center  mb-30">
								<div className="we-do-img">
									<img src={require("../../../public/assets//img/icon/icon2.png")} alt="icon"/>
								</div>
								<div className="we-do-text">
									<h4><a href="#">Biologically Safe</a></h4>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p>
									<Link href="/services" as="/services" >
										<a>
											Read More <i className="dripicons-arrow-thin-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-md-6">
							<div className="we-do-wrapper text-center mb-30">
								<div className="we-do-img">
									<img src={require("../../../public/assets/img/icon/icon3.png")} alt="icon"/>
								</div>
								<div className="we-do-text">
									<h4><a href="#">Conserve Biodiversity</a></h4>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt ut labore et dolore magna aliqua.</p>
									<Link href="/services" as="/services" >
										<a>
											Read More <i className="dripicons-arrow-thin-right"></i>
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default H2WhatWeDoSection;
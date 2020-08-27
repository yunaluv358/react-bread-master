import React, { useEffect, useState } from 'react'
import { ShopAbout } from '../shop/ShopAbout'
import { ShopMessageRegister } from '../shop/ShopMessageRegister';
import JsonData from '../vendor/data.json';

export const HomeMain = () => {

	const [landingPageData,setLandingPageData] = useState({})

	useEffect(() => {
		setLandingPageData(JsonData)
	},[])

	// const componentDidMount = () => {
	//     getlandingPageData();
	// }
	return (
		<div>
			<Navigation />
			<Header data={JsonData.Header} />
			<Features data={JsonData.Features} />
			<ShopAbout data={JsonData.About} />
			<ShopMessageRegister data={JsonData.Contact} />
		</div>
	)
}
export const Navigation = () => {
	const handleLogout = e=> {
		sessionStorage.removeItem('user')
		window.location.reload()
	}

	return (
		<nav id="menu" className="navbar navbar-default navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">

					<button
						type="button"
						className="navbar-toggle collapsed"
						data-toggle="collapse"
						data-target="#bs-example-navbar-collapse-1"
					>
						{" "}
						<span className="sr-only">Toggle navigation</span>{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
						<span className="icon-bar"></span>{" "}
					</button>

					<a className="navbar-brand page-scroll" href="/">
						home

					</a>{" "}

					<a className="navbar-brand page-scroll" href="aboutDetail">
						about   </a>{" "}

					<a className="navbar-brand page-scroll" href="breadList">
						breads   </a>{" "}

					<a className="navbar-brand page-scroll" href="movie-genre">
						genre   </a>{" "}

					<a className="navbar-brand page-scroll" href="movie-list">
						movies   </a>{" "}

					<a className="navbar-brand page-scroll" href="search">
						search  </a>{" "}

					<a className="navbar-brand page-scroll" href="contactDetail">
						contact  </a>{" "}
				</div>

				<div
					className="collapse navbar-collapse"
					id="bs-example-navbar-collapse-1"
				>
					<ul className="nav navbar-nav navbar-right">

						{!sessionStorage.user &&
						<li>
							<a href="signin" className="page-scroll">
								login
							</a>
						</li>
						}
						{sessionStorage.user &&
						<li>
							<a  className="page-scroll" onClick={handleLogout}>
								logout
							</a>
						</li>
						}

						<li>
							<a href="signup" className="page-scroll">
								join
							</a>
						</li>
						<li>
							<a href="order" className="page-scroll">
								order
							</a>
						</li>
						<li>
							<a href="myPage" className="page-scroll">
								mypage
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export const Header = props => {

	return (
		<header id="header">
			<div className="intro">
				<div className="overlay">
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-md-offset-2 intro-text">
								<h1>
									{props.data ? props.data.title : "Loading"}
									<span></span>
								</h1>
								<p>
									{props.data ? props.data.paragraph : "Loading"}
								</p>
								<a
									href="AboutDetail"
									className="btn btn-custom btn-lg page-scroll"
								>
									Learn More
								</a>{" "}


								<a href="Contacts"
								   className="btn btn-custom btn-lg page-scroll"
								>
									map
								</a>{" "}


							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
export const Features = props => {
	return (
		<div id="features" className="text-center">
			<div className="container">
				<div className="col-md-10 col-md-offset-1 section-title">
					<h2>Features</h2>
				</div>
				<div className="row">
					{props.data
						? props.data.map((d,i) => (
							<div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
								{" "}
								<i className={d.icon}></i>
								<h3>{d.title}</h3>
								<p>{d.text}</p>
							</div>
						))
						: "Loading..."}
				</div>
			</div>
		</div>
	);
}
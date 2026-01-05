import { useState } from "react";
import navLogo from "../../../assets/Frame3992.png";
import navCart from "../../../assets/Cart.png";
import navcrossIcon from "../../../assets/cross.svg";
import navHamburgerIcon from "../../../assets/hamburger.svg";
function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const toggleNav = () => {
		console.log(isNavOpen);
		setIsNavOpen(!isNavOpen);
	};
	return (
		<>
			<header className="navbar">
				<div className="navbar__container container">
					<img
						className="navbar__logo"
						src={navLogo}
						alt="logo-icon"
					/>
					<nav className="navbar__nav">
						<ul className={isNavOpen ? "navbar__mobile" : "navbar__ul"}>
							{isNavOpen && (
								<div className="navbar__mobileClose">
									<button onClick={toggleNav}>
										<img src={navcrossIcon} alt="" />
									</button>
								</div>
							)}
							{isNavOpen && (
								<div className="navbar__mobileData">
									<div className="navbar__mobileLogo">
										<img src={navLogo}alt="" />
									</div>
									<div className="navbar__mobileLogoContent">
										<h2>Adithya Sharma</h2>
										<p>Frontend Devloper</p>
									</div>
								</div>
							)}
							<li className="navbar__li navbar__li--blueColor">
								<a href="#">Home</a>
							</li>
							<li className="navbar__li">
								<a href="#">Listing</a>
							</li>
							<li className="navbar__li">
								<a href="#">Contact</a>
							</li>
							<li className="navbar__li">
								<a href="#">Agents</a>
							</li>
							<li className="navbar__li">
								<a href="#">About</a>
							</li>
							<li className="navbar__li">
								<a href="#">Blog</a>
							</li>

							{/* BUTTON SECTION */}
							{isNavOpen && (
								<div className="navbar__mobileBtns">
									<button className="navbar__mobileBtn1">Sign Up</button>
									<button className="navbar__mobileBtn2">
										Create A Listing
									</button>
								</div>
							)}
						</ul>
					</nav>

					<div className="navbar__leftSection">
						<button className="navbar__btn1">Sign Up</button>
						<button className="navbar__btn2">Create A Listing</button>
						<div className="navbar__leftSectionImg">
							<img src={navCart} alt="cart-icon" />
						</div>
					</div>
					<div className="navbar__hamburger">
						<button onClick={toggleNav}>
							<img src={navHamburgerIcon} alt="" />
						</button>
					</div>
				</div>
			</header>
		</>
	);
}

export default Navbar;

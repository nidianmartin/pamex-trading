import React from 'react'
import { Link } from "react-router-dom";
import './signUp.css'

export default function SignUp() {
    return (
        <div className="main-page-wrapper user-access-page">
            <div className="main-container">
				<div className="inner-box">
					<h3 className="main-title">Create your account</h3>
					<form action="#" className="sign-up-form" autocomplete="off">
						<input type="text" placeholder="Full Name"/>
						<input type="email" placeholder="Email"/>
						<input id="phone" name="phone" type="tel" className="font-fix"/>
						<select className="theme-select-dropdown" id="currency">
							<option value="USD">USD - Dollar</option>
							<option value="EUR">EUR - Euro</option>
							<option value="GBP">GBP - British Pound</option>
							<option value="CAD">CAD - Canadian Dollar</option>
							<option value="CNY">CNY - Chinese Yuan</option>
							<option value="JPY">JPY - Japanese Yen</option>
							<option value="RUB">RUB - Russian Ruble </option>
						</select>
						<input type="password" placeholder="Password"/>
						<p className="password-text">Your password should have at least 8 characters</p>
						<button className="theme-button"><span></span>Create account</button>
					</form>
					<div className="condition-text font-fix">By clicking 'Create account' you agree to our<Link to="/">Terms of service</Link> and <Link href="/">Privacy policy</Link>.</div>
				</div>

				<div className="text-center">
					<a href="login.html" className="additional-link-text font-fix">Already have an account?</a>
				</div>
			</div>
        </div>
    )
}

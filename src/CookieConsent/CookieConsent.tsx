import { useEffect, useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import NeonBackground from "../hoc/NeonBackground";

const CookieConsent = (): JSX.Element => {
	const [showConsent, setShowConsent] = useState(true);

	const agreedToCookies = localStorage.getItem('cookiesareok');

	const agreeToCookies = (): void => { 
		localStorage.setItem('cookiesareok', 'true');

		setShowConsent(false);
	}

	return !agreedToCookies && showConsent ? (
		<div className="cookie-consent-container"> 
			<div className="cookie-consent">
				<> 
					<p className="cookie-consent__text">Our website saves cookies for better performance. Continuing using this website you are agreeing to the use of cookies. </p>
					<div className="button-container">
						<PrimaryButton clickHandler={agreeToCookies} text="Ok"/>
					</div>
				</>
			</div>
		</div>
	) : null;
};

export default CookieConsent;
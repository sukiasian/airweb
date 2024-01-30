import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
    return <footer className="footer">
        <p className="paragraph--bold">AIRWEB AGENCY LLC</p>
		<p>30 N Gould St, Sheridan, WY, 82801</p>
		<Link to={'/policy'}> 
			<div className="privacy-policy-link-container">
				<p>Privacy Policy</p>
			</div>
		</Link>
    </footer>;
};

export default Footer;

import BlackBackground from "../../hoc/BlackBackground";

interface BlackPageHeadingProps { 
	title: string;
}

const BlackPageHeading = ({ title }: BlackPageHeadingProps): JSX.Element => {
	return (<BlackBackground> 
		<section className="page-heading page-heading--black">
			<h1 className="heading heading--primary">{title.toUpperCase()}</h1> 
		</section> 
	</BlackBackground>);
}

export default BlackPageHeading;
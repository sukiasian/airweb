import CallToAction from './CallToAction/CallToAction';
import '../assets/images/header-background.svg'
// import Hashtags from './Hashtags/Hashtags';

const LandingHeader = (): JSX.Element => {
    return <header className="landing-header">
		<svg id='landing-background' width={'100vw'} height={'auto'} preserveAspectRatio='slice'> 
			<use href='#header-background' />
		</svg>
				{/* <Hashtags /> */}
		<CallToAction />
    </header>;
};

export default LandingHeader;

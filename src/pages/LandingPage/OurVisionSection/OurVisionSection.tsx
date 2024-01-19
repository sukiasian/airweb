import { useLocomotiveScroll } from 'react-locomotive-scroll';
import SectionHeading from '../../../SectionHeading/SectionHeading';
import VisionCards from './VisionCards';
import BlackBackground from '../../../hoc/BlackBackground';

const OurVisionSection = (): JSX.Element => {
    return <BlackBackground>
		<section className="our-vision-section">
			<SectionHeading classnames='absolute-left' heading="Our Vision" />
			<VisionCards />
    	</section>
	</BlackBackground>
};

export default OurVisionSection;

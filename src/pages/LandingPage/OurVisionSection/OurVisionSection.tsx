import SectionHeading from '../../../SectionHeading/SectionHeading';
import VisionCards from './VisionCards';

const OurVisionSection = (): JSX.Element => {
    return <section className="our-vision-section">
        <SectionHeading classnames=';as' heading="Our Vision" />
        <VisionCards />
    </section>;
};

export default OurVisionSection;

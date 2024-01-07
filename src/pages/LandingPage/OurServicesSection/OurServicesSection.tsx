import SectionHeading from '../../../SectionHeading/SectionHeading';
import BlackBackground from '../../../hoc/BlackBackground';
import ServicesCards from './ServicesCards';

const OurServicesSection = (): JSX.Element => {
    return <BlackBackground>
        <section id='our-services' className='our-services'>
            <SectionHeading classnames='absolute-left' heading='Our Services' />
            <ServicesCards />
        </section>
    </BlackBackground>;
};

export default OurServicesSection;

import SectionHeading from '../../../SectionHeading/SectionHeading';
import BlackBackground from '../../../hoc/BlackBackground';
import StackCarousel from './StackCarousel/StackCarousel';

const OurTechStackSection = (): JSX.Element => {
    return <BlackBackground><section className='our-stack'>
        <SectionHeading classnames='absolute-left' heading='Our Tech Stack' />
        <StackCarousel />
    </section></BlackBackground>;
};

export default OurTechStackSection;

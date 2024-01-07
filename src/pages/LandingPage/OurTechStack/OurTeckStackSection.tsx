import SectionHeading from '../../../SectionHeading/SectionHeading';
import StackCarousel from './StackCarousel/StackCarousel';

const OurTechStackSection = (): JSX.Element => {
    return <section className='our-stack'>
        <SectionHeading heading='Our Stack' />
        <StackCarousel />
    </section>;
};

export default OurTechStackSection;

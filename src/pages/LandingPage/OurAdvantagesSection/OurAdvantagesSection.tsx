import SectionHeading from '../../../SectionHeading/SectionHeading';
import BlackBackground from '../../../hoc/BlackBackground';
import AdvantagesCards from './AdvantagesCards';


const OurAdvantagesSection = (): JSX.Element => {
    return <BlackBackground> 
		<section id='our-services' className='our-services'>
			<SectionHeading right classnames='absolute-right' heading='Our Advantages' />
			<AdvantagesCards />
        </section>
	</BlackBackground>
};

export default OurAdvantagesSection;

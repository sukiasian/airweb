import { useRef, useEffect } from 'react';
import SectionHeading from '../../../SectionHeading/SectionHeading';
import BlackBackground from '../../../hoc/BlackBackground';
import ServicesCards from './ServicesCards';
import LocomotiveScroll from 'locomotive-scroll';


const OurServicesSection = (): JSX.Element => {
// 	const scrollRef = useRef(null);

//   	useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       // Add Locomotive Scroll options here
//     });

//     return () => {
//       scroll.destroy();
//     };
//   }, []);

    return <BlackBackground> 
		<section id='our-services' className='our-services'>
            <>
				<SectionHeading classnames='absolute-left' heading='Our Services' />
				<ServicesCards />
			</>
        </section>
	</BlackBackground>
};

export default OurServicesSection;

import LandingHeader from '../../LandingHeader/LandingHeader'
import DottedLine from '../../components/splitting-lines/DottedLine'
import ContactUsSection from './ContactUsSection/ContactUsSection'
import OurAdvantagesSection from './OurAdvantagesSection/OurAdvantagesSection'
import OurServicesSection from './OurServicesSection/OurServicesSection'
import OurTeamSection from './OurTeamSection/OurTeamSection'
import OurTechStackSection from './OurTechStack/OurTeckStackSection'
import OurVisionSection from './OurVisionSection/OurVisionSection'

const LandingPage = (): JSX.Element => {
	return (
		<div data-scroll-container className='page landing'>
			<LandingHeader />
			<OurServicesSection />
			<OurAdvantagesSection />
			<OurTechStackSection />
			<OurTeamSection />
			<OurVisionSection />
			{/* <BasicPricingSection /> */}
			<DottedLine />
			<ContactUsSection />
		</div>
	)
}

export default LandingPage

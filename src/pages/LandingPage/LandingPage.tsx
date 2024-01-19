import LandingHeader from '../../LandingHeader/LandingHeader'
import DottedLine from '../../components/splitting-lines/DottedLine'
import ContactUsSection from './ContactUsSection/ContactUsSection'
import OurServicesSection from './OurServicesSection/OurServicesSection'
import OurTeamSection from './OurTeamSection/OurTeamSection'
import OurVisionSection from './OurVisionSection/OurVisionSection'

const LandingPage = (): JSX.Element => {
	return (
		<div data-scroll-container className='page landing'>
			<LandingHeader />
			<OurServicesSection />
			{/* <OurTechStackSection /> */}
			<OurTeamSection />
			<OurVisionSection />
			{/* <BasicPricingSection /> */}
			<DottedLine />
			<ContactUsSection />
		</div>
	)
}

export default LandingPage

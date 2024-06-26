import CallUsButton from '../../../components/buttons/CallUsButton'
import ContactUsForm from '../../../components/forms/ContactUsForm/ContactUsForm'
import BlackBackground from '../../../hoc/BlackBackground'

const ContactUsSection = (): JSX.Element => {
	return (
		<BlackBackground>
			<section id='contact-us' className='contact-us'>
				<h1 id='contact-us-heading' className='heading heading--primary'>Contact us</h1>

				<div className='contact-options'>
					<ContactUsForm />
				</div>
				<p id='contact-us-or-paragraph' className='paragraph paragraph--large'>
					{' '}
					OR{' '}
				</p>
				<CallUsButton />
			</section>
		</BlackBackground>
	)
}

export default ContactUsSection

import axios from 'axios'
import { useState } from 'react'
import PrimaryButton from '../../buttons/PrimaryButton'
import Input from '../Input'
import TextArea from '../TextArea'
import './../../../assets/images/success.png'

const ContactUsForm = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [additionalInformation, setAdditionalInformation] = useState('')
	const [isNameValid, setIsNameValid] = useState(true)
	const [isEmailValid, setIsEmailValid] = useState(true)
	const [isAdditionalInformationValid, setIsAdditionalInformationValid] =
		useState(true)
	const [isFormSubmitted, setIsFormSubmitted] = useState(false)

	const isFormValid =
		isEmailValid && isNameValid && isAdditionalInformationValid

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		if (!isFormValid) {
			console.log('Форма не валидна. Пожалуйста, заполните все поля правильно.')
			return
		}

		try {
			const response = await axios.post('/contact', {
				name,
				email,
				additionalInformation,
			})

			if (response.data.success) {
				console.log('The form has been successfully submitted!')
				setIsEmailValid(true)

				setIsFormSubmitted(true)
			} else {
				console.log(
					'An error occurred while submitting the form. Please try again.'
				)
			}
		} catch (error) {
			console.error('An unexpected error has occurred:', error)
			console.log('An unexpected error has occurred. Please try again later.')
		}
	}

	const handleEmailChange = event => {
		const email = event.target.value
		const isEmailRegexValid = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(
			email
		)

		setEmail(email)
		setIsEmailValid(isEmailRegexValid)
	}

	return (
		<form className='form contact-us-form' onSubmit={handleSubmit}>
			<h2 className='heading heading--secondary'>Get in touch</h2>

			<Input
				className='form__field'
				label='Name'
				placeholder='Name'
				required={true}
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
			/>

			<Input
				className='form__field'
				label='E-mail'
				placeholder='E-mail'
				required={true}
				type='email'
				value={email}
				onChange={handleEmailChange}
			/>

			<TextArea
				className='form__field'
				label='Additional information'
				placeholder='Additional information'
				value={additionalInformation}
				onChange={e => setAdditionalInformation(e.target.value)}
			/>
			<PrimaryButton
				text='contact'
				type='submit'
				className={
					isFormValid ? 'button button--primary' : 'button button--disabled'
				}
			/>

			{isFormValid && isFormSubmitted && (
				<div className='success-image-container'>
					<img id="success-icon" src={require('../../../assets/images/success.png')} />
				</div>
			)}
		</form>
	)
}

export default ContactUsForm

import axios from 'axios'
import { useState } from 'react'
import PrimaryButton from '../../buttons/PrimaryButton'
import Input from '../Input'
import TextArea from '../TextArea'

const ContactUsForm = (): JSX.Element => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [additionalInformation, setAdditionalInformation] = useState('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			const response = await axios.post('http://localhost:5000/contact', {
				name,
				email,
				additionalInformation,
			})

			if (response.data.success) {
				console.log('Форма успешно отправлена!')
			} else {
				console.log(
					'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.'
				)
			}
		} catch (error) {
			console.error('Произошла неожиданная ошибка:', error)
			console.log('Произошла неожиданная ошибка. Пожалуйста, попробуйте позже.')
		}
	}

	return (
		<form className='form contact-us-form' onSubmit={handleSubmit}>
			<p className='paragraph'>Заполните контактную форму.</p>

			<Input
				className='form__field'
				label='Имя'
				placeholder='Имя'
				required={true}
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<Input
				className='form__field'
				label='Email'
				placeholder='Email'
				type='email'
				required={true}
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<TextArea
				className='form__field'
				label='Дополнительная информация'
				placeholder='Дополнительная информация'
				value={additionalInformation}
				onChange={e => setAdditionalInformation(e.target.value)}
			/>

			<PrimaryButton text='Связаться' />
		</form>
	)
}

export default ContactUsForm

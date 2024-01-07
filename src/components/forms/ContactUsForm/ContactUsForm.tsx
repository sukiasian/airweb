import PrimaryButton from '../../buttons/PrimaryButton';
import Input from '../Input';
import TextArea from '../TextArea';

const ContactUsForm = (): JSX.Element => {
    return <form className="form contact-us-form">
        <p className='paragraph'>Fill in a contact form to contact.</p>

        <Input className='form__field' label='Name' placeholder='Name' required={true} />
        <Input className='form__field' label='Email' placeholder='Email' required={true} />
        <TextArea className='form__field' label='Additional information' placeholder='Additional information' />

        <PrimaryButton text='Contact' clickHandler={(e) => {
            e.preventDefault();
        }} />
    </form>;
};

export default ContactUsForm;

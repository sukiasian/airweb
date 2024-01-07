import { type MouseEventHandler } from 'react';

interface PrimaryButtonProps {
    text: string
    clickHandler?: MouseEventHandler
}

const PrimaryButton = ({ text, clickHandler }: PrimaryButtonProps): JSX.Element => {
    return <button className='button button--primary' onClick={clickHandler}>{text}</button>;
};

export default PrimaryButton;

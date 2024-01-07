interface RoundButtonProps {
    children: string | JSX.Element
    classnames?: string
}

const RoundButton = ({ children }: RoundButtonProps): JSX.Element => {
    return <button className='button button--round'>{children}</button>;
};

export default RoundButton;

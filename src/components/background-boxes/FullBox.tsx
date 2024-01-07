interface FullBoxProps {
    children: JSX.Element | JSX.Element[]
}

const FullBox = ({ children }: FullBoxProps): JSX.Element => {
    return <div className="full-box-background">{children}</div>;
};

export default FullBox;

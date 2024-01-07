interface OffsetBoxProps {
    children: JSX.Element | JSX.Element[]
}

const OffsetBox = ({ children }: OffsetBoxProps): JSX.Element => {
    return <div className="offset-box-background">{children}</div>;
};

export default OffsetBox;

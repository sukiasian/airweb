interface BlackBackgroundProps {
    children: JSX.Element
}

const BlackBackground = ({ children }: BlackBackgroundProps): JSX.Element => {
    return <div className="background background--black">
        {children}
    </div>;
};

export default BlackBackground;

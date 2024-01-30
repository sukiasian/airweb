interface BlackBackgroundProps {
    children: JSX.Element
	classnames?: string
}

const BlackBackground = ({ children, classnames }: BlackBackgroundProps): JSX.Element => {
    return <div className={`background background--black ${classnames ?? ''}`}>
        {children}
    </div>;
};

export default BlackBackground;

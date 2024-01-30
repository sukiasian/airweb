interface NeonBackgroundProps {
    children: JSX.Element
	classnames?: string
}

const NeonBackground = ({ children, classnames }: NeonBackgroundProps): JSX.Element => {
    return <div className={`background background--neon ${classnames ?? ''}`}>
        {children}
    </div>;
};

export default NeonBackground;

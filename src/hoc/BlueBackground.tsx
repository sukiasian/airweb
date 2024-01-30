interface BlueBackgroundProps {
    children: JSX.Element
	classnames?: string
}

const BlueBackground = ({ children, classnames }: BlueBackgroundProps): JSX.Element => {
    return <div data-scroll-section className={`background background--blue ${classnames ?? ''}`}>
        {children}
    </div>;
};

export default BlueBackground;

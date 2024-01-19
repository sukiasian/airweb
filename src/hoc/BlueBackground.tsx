interface BlueBackgroundProps {
    children: JSX.Element
}

const BlueBackground = ({ children }: BlueBackgroundProps): JSX.Element => {
    return <div data-scroll-section className="background background--blue">
        {children}
    </div>;
};

export default BlueBackground;

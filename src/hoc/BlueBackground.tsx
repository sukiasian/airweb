interface BlueBackgroundProps {
    children: JSX.Element
}

const BlueBackground = ({ children }: BlueBackgroundProps): JSX.Element => {
    return <div className="background background--blue">
        {children}
    </div>;
};

export default BlueBackground;

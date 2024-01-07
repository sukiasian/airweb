interface NeonCardProps {
    children: JSX.Element | JSX.Element[]
}

const NeonCard = ({ children }: NeonCardProps): JSX.Element => {
    return <div className="card card--neon">
        {children}
    </div>;
};

export default NeonCard;

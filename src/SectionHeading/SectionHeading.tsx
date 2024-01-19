interface SectionHeadingProps {
    heading: string
    classnames?: string
    right?: boolean
}

const SectionHeading = ({ heading, classnames, right }: SectionHeadingProps): JSX.Element => {
    return <div data-scroll-section className={`${classnames ?? ''} section-heading`}>
        { right
            ? (<>
                <h1 className="heading heading--primary">{heading}</h1>
                <div className="red-bullet" />
            </>)
            : (<><div className="red-bullet" />
                <h1 className="heading heading--primary">{heading}</h1></>)
        }
    </div>;
};

export default SectionHeading;

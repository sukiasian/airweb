import { RefObject } from "react";

interface CallToActionProps { 
	innerRef: RefObject<HTMLDivElement>
}

const CallToAction = ({ innerRef }: CallToActionProps): JSX.Element => {
    return <div className="cta" ref={innerRef}>
        <h1 className="heading heading--primary">Application is a <br /> pathway to your <span id='cta-highlight'>success</span>.</h1>
        <p className="paragraph paragraph--large">Get the most advanced software solutions for your business with our team of experts.</p>

        <a href='#contact-us'><button className='button button--primary'>Contact us</button></a>
    </div>;
};

export default CallToAction;

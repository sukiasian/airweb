import CallToAction from './CallToAction/CallToAction';
import '../assets/images/header-background.svg'
import { LegacyRef, useEffect, useRef, useState } from 'react';
// import Hashtags from './Hashtags/Hashtags';

const LandingHeader = (): JSX.Element => {
	const ctaRef = useRef<HTMLDivElement>();
	const svgRef = useRef() as LegacyRef<SVGSVGElement>;

	const [height, setHeight] = useState(null);

	const handleResize = (): void => { 
		if(ctaRef.current) { 
			setHeight(ctaRef.current.clientHeight);
		}
	}

	useEffect(() => {
		if(ctaRef.current) { 
			setHeight(ctaRef.current.clientHeight);
		}
		
		window.addEventListener('resize', handleResize);

	    return () => {
      		window.removeEventListener('resize', handleResize);
    	};
	}, [window.innerWidth]);


	
	
    return <header className="landing-header">
		<div> 
	  		<svg ref={svgRef} width="100%" height={height} viewBox="0 0 631 393" preserveAspectRatio="xMidYMid slice">
				<use href='#header-background' />
			</svg>
				{/* <Hashtags /> */}
		</div>
		<CallToAction innerRef={ctaRef}/>
    </header>;
};

export default LandingHeader;

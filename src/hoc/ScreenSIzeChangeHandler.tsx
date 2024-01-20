import React, { useEffect } from "react";

interface ScreenSizeChangeHandlerProps {
	children: JSX.Element
	handler?: (...props: any) => any;
}

const ScreenSizeChangeHandler = ({ handler, children }: ScreenSizeChangeHandlerProps): JSX.Element => {
	useEffect(() => { 
		handler(); 

		window.addEventListener('resize', handler);

		return () => {
			window.removeEventListener('resize', handler);
		}
	}, [])

    return <React.Fragment>
        {children}
    </React.Fragment>;
};

export default ScreenSizeChangeHandler;

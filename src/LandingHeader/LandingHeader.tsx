import CallToAction from './CallToAction/CallToAction';
// import Hashtags from './Hashtags/Hashtags';

const LandingHeader = (): JSX.Element => {
    return <header className="landing-header">
        {/* <Hashtags /> */}
        <CallToAction />
    </header>;
};

export default LandingHeader;

const Hashtags = (): JSX.Element => {
    const hashtags = ['web', 'application', 'design', 'mobile', 'userfriendly', 'uxui'];

    return <div className="hashtags">
        <ul className="hashtags__list">
            {hashtags.map((tag, i) => <li key={i}>#{tag}</li>)}
        </ul>
    </div>;
};

export default Hashtags;

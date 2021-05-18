function SocialNav(props) {
    const { isHomePage } = props;
    return (
        <div className={`flex ${isHomePage ? "absolute top-2" : "self-center my-4"}`}>
            <a href="https://twitter.com/DeaMusic63?s=09" rel="noreferrer" target="_blank">
                <i className={`fab fa-twitter fa-2x m-2 hover:text-gray-500 text-gray-300 ${isHomePage && "ent-left"}`} title="Twitter"></i>
            </a>
            <a href="https://www.facebook.com/deamusic63/" rel="noreferrer" target="_blank">
                <i className={`fab fa-facebook fa-2x m-2 hover:text-gray-500 text-gray-300 ${isHomePage && "entrance"}`} title="Facebook">
                    {" "}
                </i>
            </a>
            <a href="https://youtube.com/c/DEAMusic63" rel="noreferrer" target="_blank">
                <i className={`fab fa-youtube fa-2x m-2 hover:text-gray-500 text-gray-300 ${isHomePage && "entrance"}`} title="Youtube"></i>
            </a>
            <a href="https://m.soundcloud.com/dea63" rel="noreferrer" target="_blank">
                <i className={`fab fa-soundcloud fa-2x m-2 hover:text-gray-500 text-gray-300 ${isHomePage && "ent-right"}`} title="Soundcloud"></i>
            </a>
        </div>
    );
}

export default SocialNav;

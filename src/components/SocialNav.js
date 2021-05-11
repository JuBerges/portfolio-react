function SocialNav() {
    return (
        <div className="flex absolute top-2">
            <a href="https://twitter.com/DeaMusic63?s=09" rel="noreferrer" target="_blank">
                <i className="fab fa-twitter fa-2x m-2 hover:text-red-600 text-gray-300 ent-left" title="Twitter"></i>
            </a>
            <a href="https://youtube.com/c/DEAMusic63" rel="noreferrer" target="_blank">
                <i className="fab fa-youtube fa-2x m-2 hover:text-red-600 text-gray-300 entrance"></i>
            </a>
            <a href="https://m.soundcloud.com/dea63" rel="noreferrer" target="_blank">
                <i className="fab fa-soundcloud fa-2x m-2 hover:text-red-600 text-gray-300 ent-right"></i>
            </a>
        </div>
    );
}

export default SocialNav;

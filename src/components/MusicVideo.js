import { useState } from "react";
import { Title } from "../components/index";
import * as DATA from "../constants/data";
import "../styles/Home.css";

export default function MusicVideo() {
    const [clipSource, setClipSource] = useState(DATA.CLIPS[0]);

    function changeClip(number) {
        setClipSource(DATA.CLIPS[number]);
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <Title title="VIDEO" />
            <h2 className="blackops mb-2 ent-right">{clipSource.title}</h2>
            <div className="flex ent-left">
                {DATA.CLIPS.map((clip) => (
                    <button
                        onClick={() => changeClip(clip.id - 1)}
                        key={clip.id}
                        className={`m-2 bg-gray-500 hover:bg-white hover:text-gray-500 hover:border-gray-500 hover:border-2 blackops px-4 py-2 rounded-xl focus:outline-none ${
                            clipSource.id === clip.id && "border-2 transform scale-110"
                        }`}
                    >
                        {clip.id}
                    </button>
                ))}
            </div>
            <div className="w-full xl:w-1/2 p-4 my-4 bg-gray-500 rounded-xl ent-right">
                <iframe title="Youtube" width="100%" height="450" src={clipSource.url} allow="autoplay; encrypted-media"></iframe>
            </div>
        </div>
    );
}

import { Title } from "../components/index";

export default function MusicVideo() {
    const url = "https://www.youtube.com/embed/videoseries?&list=UUVsNXTVtrOfK1czr5W9TDLA";
    return (
        <div className="flex flex-col justify-center items-center">
            <Title title="VIDEO" />
            <div className="w-full xl:w-1/2 p-4 my-4 bg-gray-500 rounded-xl ent-right">
                <iframe title="Youtube video player" width="100%" height="450" src={url} allow="autoplay; encrypted-media"></iframe>
            </div>
        </div>
    );
}

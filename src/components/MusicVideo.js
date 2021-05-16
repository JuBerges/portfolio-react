import { Title } from "../components/index";

export default function MusicVideo() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Title title="MUSIQUE" />
            <div className="w-full xl:w-1/2 p-4 my-4 bg-gray-500">
                <iframe
                    title="Youtube"
                    width="100%"
                    height="450"
                    src="https://www.youtube.com/embed/videoseries?list=UUVsNXTVtrOfK1czr5W9TDLA"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
}

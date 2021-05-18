import { Title } from "../components/index";
import * as DATA from "../constants/data";

export default function SoundCloud() {
    return (
        <div className="flex flex-col justify-center items-center mb-10">
            <Title title="MUSIQUE" />
            {DATA.ALBUMS.map((album) => (
                <div className="w-2/3 mt-4" key={album.id}>
                    <p className="blackops text-center bg-gray-500 p-2 rounded-b-none rounded-lg">{album.title}</p>
                    <iframe title={album.title} width="100%" height="400" src={album.url}></iframe>
                </div>
            ))}
        </div>
    );
}

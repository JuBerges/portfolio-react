import * as DATA from "../constants/data";

export default function SoundCloud() {
    return (
        <div className="flex flex-col justify-center items-center mb-10">
            {DATA.ALBUMS.map((album) => (
                <div className="w-2/3" key={album.id}>
                    <p className="blackops">{album.title}</p>
                    <iframe title={album.title} width="100%" height="450" allow="autoplay" src={album.url}></iframe>
                </div>
            ))}
        </div>
    );
}

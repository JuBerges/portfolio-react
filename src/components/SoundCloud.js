export default function SoundCloud() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full xl:w-1/2 p-4 my-4 bg-gray-500">
                <iframe
                    title="Soundcloud"
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1220784268&color=%23dc2626&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
            </div>
            <div className="w-full xl:w-1/2 p-4 my-4 bg-gray-500">
                <iframe
                    title="Soundcloud"
                    width="100%"
                    height="450"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1220784268&color=%23dc2626&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
            </div>
        </div>
    );
}

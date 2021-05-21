export default function ImageDisplay({ images }) {
    return (
        <div>
            {images.map((image, index) => (
                <div key={index}>
                    <a href={image} rel="noreferrer" target="_blank">
                        <img className="border-t-8 border-b-8 border-blue-500 mx-auto" src={image} alt="Illustration de projet" />
                    </a>
                </div>
            ))}
        </div>
    );
}

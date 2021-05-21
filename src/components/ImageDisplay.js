import { Link } from "react-router-dom";

export default function ImageDisplay({ images }) {
    return (
        <div>
            {images.map((image, index) => (
                <div key={index}>
                    <Link to={image} target="_blank">
                        <img className="border-t-8 border-b-8 border-blue-500 mx-auto" src={image} alt="Illustration de projet" />
                    </Link>
                </div>
            ))}
        </div>
    );
}

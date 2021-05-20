import sql from "../assets/images/sql.png";

export default function Tech() {
    return (
        <div className="flex w-full justify-around flex-wrap my-16">
            <div className="flex mx-10 justify-center text-center items-center p-2 glass border border-blue-600">
                <h2 className="uppercase font-extrabold text-4xl text-blue-500">Technologies utilisées</h2>
            </div>
            {/* icon part */}
            <div className="mx-5 flex flex-wrap justify-center">
                <div className="text-5xl flex flex-wrap justify-center items-center p-2 glass border border-blue-600">
                    <i title="logo html 5" className="fab fa-html5 text-red-600 m-1 bg-white px-1 rounded"></i>
                    <i title="logo CSS 3" className="fab fa-css3-alt text-blue-500 m-1 bg-white px-1 rounded"></i>
                    <i title="logo JavaScript" className="fab fa-js-square text-yellow-300 m-1 bg-white px-1 rounded"></i>
                    <i title="logo node JS" className="fab fa-node text-green-500 m-1 bg-white px-1 rounded"></i>
                    <i title="logo PHP" className="fab fa-php text-indigo-600 m-1 bg-white px-1 rounded"></i>
                    <i title="logo React" className="fab fa-react bg-white text-blue-400 m-1 px-1 rounded"></i>
                    <i title="logo Symfony" className="fab fa-symfony m-1 text-gray-700 bg-white px-1 rounded"></i>
                    <i title="logo Vue JS" className="fab fa-vuejs m-1 text-green-500 bg-white px-1 rounded"></i>
                    <img title="logo MySQL" className="h-12 m-1 bg-white rounded" src={sql} alt="logo de MySQL" />
                </div>
            </div>
        </div>
    );
}

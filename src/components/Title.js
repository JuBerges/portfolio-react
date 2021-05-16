export default function Title(props) {
    const { title = "titre" } = props;
    return <h1 className="m-4 blackops text-4xl md:text-7xl">{title}</h1>;
}

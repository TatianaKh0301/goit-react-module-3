import errorImage from "../Pokemon/cat.jpg";

export function PokemonErrorView ({message}) {
    return(
        <div role="alert">
            <img src={errorImage} width="240" alt="sadcat" />
            <p>{message}</p>
        </div>
    );
}
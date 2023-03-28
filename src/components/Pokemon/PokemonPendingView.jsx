import {ImSpinner} from 'react-icons/im';
import pendingImage from '../Pokemon/pendingImage.jpg';
import { PokemonDataView } from './PokemonDataView';

const styles = {

};

export function PokemonPendingView ({ pokemonName }) {
    const pokemon = {
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },
        stats: [],

    };

    return(
        <div role="alert">
            <div style={styles.spinner}>
                <ImSpinner size="32" className="icon-spin"/>
                Загружаем...
            </div>
            <PokemonDataView pokemon={pokemon}/>
        </div>       
    );
}
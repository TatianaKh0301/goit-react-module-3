import { Component } from "react";
import { PokemonErrorView } from "../Pokemon/PokemonErrorView"
import { PokemonDataView } from "./PokemonDataView";
import { PokemonPendingView } from "./PokemonPendingView";
import pokemonAPI from '../../services/pokemon-api';

export class PokemonInfo extends Component {
    state = {
        pokemon: null,
        error: null,
        status: 'idle'
    };

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        if(prevName !== nextName) {
            this.setState({ status: 'pending'});
            pokemonAPI.fetchPokemon(nextName)
                .then(pokemon => this.setState({pokemon, status: 'resolved'}))
                .catch(error => this.setState({ error, status: 'rejected' }))
        }
    }

    render() {
        const { pokemon, error, status} = this.state;
        const {pokemonName} = this.props;
        if(status === 'idle') {
            return <div>Write pokemon's name</div>;
        }

        if(status === 'pending') {
            return <PokemonPendingView pokemonName={pokemonName}/>
        }

        if(status === 'rejected') {
            return <PokemonErrorView message={error.message} />;
        }

        if(status === 'resolved') {
            return <PokemonDataView pokemon={pokemon}/>
        }

        // return(
        //     <div>
        //         <h1>PokemonInfo</h1>
        //         {!pokemonName && <div>Write pokemon's name</div>}
        //         {error && <div>{error.message}</div>}
        //         {loading && <div>Loading...</div>}
        //         {pokemon && 
        //             <div>
        //                 <p>{pokemon.name}</p>
        //                 <img 
        //                     src={pokemon.sprites.other['official-artwork'].front_default}
        //                     alt={pokemon.name}
        //                     width="240"
        //                 />
        //             </div>
        //         }
        //     </div>
        // );
    }
}
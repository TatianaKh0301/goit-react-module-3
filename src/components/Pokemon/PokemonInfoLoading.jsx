import { Component } from "react";

export class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false,
        error: null
    };

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;
        if(prevName !== nextName) {
            console.log("Pockemon's name changed");
            // console.log("prevProps.pokemonName", prevProps.pokemonName);
            // console.log("this.props.pokemonName", this.props.pokemonName);
            this.setState({ loading: true, pokemon: null});
            fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
            .then(response => {
                if(response.ok) {
                    return response.json()
                }

                return Promise.reject(new Error(`There are no pokemon with name ${nextName}`))
            })
            .then(pokemon => this.setState({pokemon}))
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false}));
        }
    }

    render() {
        const { pokemon, loading, error} = this.state;
        const { pokemonName} = this.props;
        return(
            <div>
                <h1>PokemonInfo</h1>
                {!pokemonName && <div>Write pokemon's name</div>}
                {error && <div>{error.message}</div>}
                {loading && <div>Loading...</div>}
                {pokemon && 
                    <div>
                        <p>{pokemon.name}</p>
                        <img 
                            src={pokemon.sprites.other['official-artwork'].front_default}
                            alt={pokemon.name}
                            width="240"
                        />
                    </div>
                }
            </div>
        );
    }
}
import React, {Component} from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { PokemonForm } from "./Pokemon/PokemonForm";
import { PokemonInfo } from "./Pokemon/PokemonInfoStateMachine";
// import { PokemonInfo } from "./Pokemon/PokemonInfoLoading";
// import { Reader } from "./Reader";
// import publications from "./Reader/publications.json";
// import { Player } from "./Player";
// import { VideoList } from "./VideoList";
// import videos from "../videos.json";

// export class App extends Component {
  // state = {
  //   selectedVideo: null,
  // };

  // selectVideo = link => {
  //   this.setState({selectedVideo: link});
  // };

  // state = {
  //   pokemon: null,
  //   loading: false
  // }

  // componentDidMount() {
  //   this.setState({loading: true});
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //   .then(res => res.json())
  //   .then(pokemon => this.setState({pokemon}))
  //   .finally(() => this.setState({loading: false}));
  // }

  // render() {
  //   return (
  //     <div
  //       style={{
  //        padding: 24
  //       }}
  //     >
        // {/* <Reader items={publications}/> */}
        // {/* <h1>SelectedVideo: {this.state.selectedVideo}</h1>
        // <VideoList videos={videos} onSelect={this.selectVideo}/>
        // <Player url={this.state.selectedVideo}/> 
//         {this.state.loading && <h1>Загружаем........</h1>}
//         {this.state.pokemon && (
//           <div>{this.state.pokemon.name}</div>
//         )}

//       </div>
//     );
//   }  
// };

export class App extends Component {
  state = {
    pokemonName: ''
  };
  handleFormSubmit = pokemonName => {
    console.log(pokemonName);
    this.setState({pokemonName});
  };

  render() {
    return(
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20}}>
        <PokemonForm onSubmit={this.handleFormSubmit}/>
        <PokemonInfo pokemonName={this.state.pokemonName}/>
        <ToastContainer autoClose={3000}/>
      </div>
    );
  }
};

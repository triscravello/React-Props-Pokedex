{/* App.js */}
{/* App: This should just render a single Pokedex. (It's common for the top-level app to not have direct logic in it, but to render the top application object - this becomes useful when I build sites that compose serveral different parts together) */}
import React from 'react'
import Pokegame from './Pokegame'; 

function App () {
    return (
        <div className="App">
            <h1>Pokegame</h1>
            <Pokegame />
        </div>
    );
}

export default App;

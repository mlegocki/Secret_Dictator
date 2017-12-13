import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postPlayer } from '../store';


function NewGame(props) {
    const { players, handleSubmit } = props;
    return (
        <div>
            <h1 id="titleScreen">Secret Dictator</h1>
            <h2>New Game</h2>
            <form id="addPlayerForm" onSubmit={handleSubmit}>
                <label>Add Player</label>
                <input
                type="text"
                name="playerName"
                placeholder="Enter new player's name"
                />
            </form>
            <ul>
                {
                    players.map(player => {
                        return (
                            <li key={player.id}>
                                {player.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = function (state) {
    const { players } = state;
    console.log(players);
    return {
        players
    };
};

const mapDispatchToProps = function (dispatch) { 
    return {
        handleSubmit(evt) { 
            evt.preventDefault();
            const addPlayerForm = document.getElementById("addPlayerForm");
            const newPlayer = 
            {
                name: evt.target.playerName.value
            };
            console.log(newPlayer);
            dispatch(postPlayer(newPlayer));
            addPlayerForm.reset();
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGame));
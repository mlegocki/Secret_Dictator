import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { postPlayer, deletePlayer, passEnoughPlayers, failEnoughPlayers } from '../store';


class NewGame extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { players, handleSubmit, handleDelete, startGame } = this.props;

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
                    <input type="submit" value="Submit" />
                </form>
                <ul>
                    {
                        players.map(player => {
                            return (
                                <li key={player.id}>
                                    <div>
                                        {player.name} <button onClick={() => handleDelete(player)}></button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => startGame(players)}>
                    Start Game
            </button>
            </div >
        )
    }
}

const mapStateToProps = function (state) {
    const { players } = state;
    return {
        players
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const { history } = ownProps;
    return {
        handleSubmit(evt) {
            evt.preventDefault();
            const addPlayerForm = document.getElementById("addPlayerForm");
            const newPlayer =
                {
                    name: evt.target.playerName.value
                };
            dispatch(postPlayer(newPlayer));
            addPlayerForm.reset();
        },
        handleDelete(player) {
            dispatch(deletePlayer(player));
        },
        startGame(players) {
            if (players.length >= 5) {
                history.push('/start-game')
            } else {
                alert('not enough players');
            }
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewGame));
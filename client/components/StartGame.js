import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { } from '../store';


function StartGame(props) {
    const { players, handleClick } = props;
    return (
        <div>
            Let's Begin...
            <button onClick={handleClick}></button>
        </div>
    )
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
        handleClick(evt) {
            evt.preventDefault();
            history.push('/nomination-stage');
        }
    };
};

export default withRouter(connect(null, mapDispatchToProps)(StartGame));
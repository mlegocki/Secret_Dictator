import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Deck from 'deck-of-cards';
import { } from '../store';


function CardDraw(props) {
    const deck = Deck();
    return (
        <div>

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
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardDraw));
import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function ({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ? <div>
                    Welcome to MoneyTrees! Choose some coins and press Update Coins for archived cryptocurrency prices.
                </div> : null
            }
        </AppContext.Consumer>
    );
};
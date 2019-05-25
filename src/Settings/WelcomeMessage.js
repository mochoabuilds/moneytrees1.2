import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function ({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ? <div>
                    Welcome to MoneyTrees, please select your favorite cryptocurrency coin to begin.{' '}
                </div> : null
            }
        </AppContext.Consumer>
    );
};
import React from "react";
import {Route} from "react-router-dom";
import CharacterList from "./CharacterList.js"
import WelcomePage from "./WelcomePage.js"


const AppRoute = () => {

    return (
        <div>
            <Route exact path="/" component={WelcomePage}/>
            <Route path="/characters" component={CharacterList}/>
        </div>
    )
}

export default AppRoute;
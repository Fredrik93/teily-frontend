import React, { Fragment } from "react";


// A component showing a banner if the backend is not connected
const ConnectionToBackend: React.FC = () => {
    return (
        // you stopped here. you would want: 
        // ping the backend
        // response 200? then dont show 
        // 500? show the banner. 
        // the banner should be pink and have text "connecting to server ..." 
        // when connected it should not be rendered, or show "connected"
        <Fragment> <h1> connecting ... </h1></Fragment>
    )
}

export default ConnectionToBackend;
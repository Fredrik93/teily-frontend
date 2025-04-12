import React, { Fragment } from "react";

const TeilyList = () => {
    //create a list of mock items 
    // make a form + button for adding item to list
    const listOfTeilys = ["clean", "shower", "gym"]
    return (
        <Fragment>
            <ul className="list-disc pl-5">
                {listOfTeilys.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </Fragment>
    )

}

export default TeilyList;
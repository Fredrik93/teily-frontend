import React, { Fragment } from "react";
import Teily from "./Teily";

const TeilyList = () => {
    //create a list of mock items 
    // make a form + button for adding item to list
    const listOfTeilys = ["clean", "shower", "gym"]
    return (
        <Fragment>
            <header className="bg-secondary text-white text-center py-5 px-4 shadow-sm rounded">
                <h4 className="display-4 fw-bold mb-3">What does your day look like?</h4>
                <p className="lead mb-4">Organize your tasks and make the most out of your day!</p>
            </header>


            <div className="container mt-4">
                <ul className="list-group">
                    {listOfTeilys.map((task, index) => (

                        <Teily task={task} key={index} />
                    ))}
                </ul>
            </div>

        </Fragment>
    )

}

export default TeilyList;
import { Fragment } from "react/jsx-runtime";
import Teily from "./Teily";
import { useState, ChangeEvent, FormEvent } from "react";

const TeilyList = () => {
    const [teily, setTeily] = useState<string>('');
    const [list, setList] = useState<string[]>(['clean'])
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTeily(e.target.value);
    }


    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (teily.trim()) {
            setList([...list, teily]);
            setTeily(''); // Clear the input field after adding the item
        }
    };

    //create a list of mock items 
    // make a form + button for adding item to list
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={teily}
                    onChange={handleChange}
                    placeholder="Enter item"
                />
                <button type="submit">Add to List</button>
            </form>

            <ul>
                {list.map((teily, index) => (
                    <Teily key={index} task={teily} />
                ))}
            </ul>
        </Fragment>
    )

}

export default TeilyList;
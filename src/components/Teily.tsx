import { Fragment } from "react/jsx-runtime";

const Teily = ({ task, key }: { task: string; key: number }) => {
    return (
        <Fragment>
            <li className="list-group-item list-group-item-info" key={key}>{task}</li>
        </Fragment>
    )
}

export default Teily;
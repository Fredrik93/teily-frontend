import React from "react";

const Teily = ({ task, key }: { task: string; key: number }) => {
    return <li className="list-group-item list-group-item-info" key={key}>{task}</li>
}

export default Teily;
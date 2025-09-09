import React, { useState } from 'react';
import { Teily } from '../models/Teily';

interface TeilyItemProps {
    teily: Teily;
    onToggleCompleted: (id: string, isCompleted: boolean) => void; // Add callback prop

}

const TeilyItem: React.FC<TeilyItemProps> = ({ teily, onToggleCompleted }) => {
    //destructure the teily object to get name and completed properties
    const { id, task, completed } = teily;


    const handleCheckboxChange = () => {
        onToggleCompleted(id, !completed)
    };

    return (
        console.log("id: ", id + " name: " + name + " completed: " + completed),
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span
                style={{ textDecoration: completed ? 'line-through' : 'none', marginRight: '8px' }}>
                {task}
            </span>
            <input
                type="checkbox"
                checked={completed}
                onChange={handleCheckboxChange}
            />
        </div>
    );
};

export default TeilyItem;
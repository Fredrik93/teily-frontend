import React, { useState } from 'react';
import { Teily } from '../models/Teily';

interface TeilyItemProps {
    teily: Teily;
}

const TeilyItem: React.FC<TeilyItemProps> = ({ teily }) => {
    //destructure the teily object to get name and completed properties
    const { name, completed } = teily;

    const [isCompleted, setIsCompleted] = useState(completed);

    const handleCheckboxChange = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span
                style={{
                    textDecoration: isCompleted ? 'line-through' : 'none',
                    marginRight: '8px',
                }}
            >
                {name}
            </span>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleCheckboxChange}
            />
        </div>
    );
};

export default TeilyItem;
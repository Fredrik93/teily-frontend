import React, { useState } from 'react';

interface TeilyItemProps {
    name: string;
    completed: boolean;
}

const TeilyItem: React.FC<TeilyItemProps> = ({ name, completed }) => {
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
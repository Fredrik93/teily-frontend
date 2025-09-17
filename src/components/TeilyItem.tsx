import React from 'react';
import { Teily } from '../models/Teily';
import deleteIcon from '../assets/delete.svg';

interface TeilyItemProps {
    teily: Teily;
    onToggleCompleted: (id: string, completed: boolean) => void; // Add callback prop
    onDelete: (id: string) => void

}

const TeilyItem: React.FC<TeilyItemProps> = ({ teily, onToggleCompleted, onDelete }) => {
    //destructure the teily object to get name and completed properties
    const { id, task, completed } = teily;
    const handleCheckboxChange = () => {
        onToggleCompleted(id, !completed)
    };
    const handleDelete = async () => {
        onDelete(id);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <span
                style={{
                    textDecoration: completed ?
                        'line-through' : 'none', marginRight: '8px'
                }}>
                {task}
            </span>
            <div style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                marginLeft: 'auto',
                marginRight: '2px'

            }}>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleCheckboxChange}

                />
                <button
                    onClick={handleDelete}
                    style={{ 'background': 'none' }}

                    aria-label="Delete"
                    title="Delete"
                >
                    <img src={deleteIcon} alt="Delete" width={20} height={20} />
                </button>
            </div>
        </div>
    );
};

export default TeilyItem;
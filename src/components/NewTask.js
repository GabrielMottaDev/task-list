import React, { useState } from 'react';
import Icon from './Icon';

const NewTask = ({ onCreate }) => {

    const [newTaskContent, setNewTaskContent] = useState('');

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCreateTask();
        }
    };

    const handleInputChange = (e) => {
        setNewTaskContent(e.target.value);
    };

    const handleCreateTask = () => {
        if (newTaskContent.trim() !== '') {
            onCreate(newTaskContent);
            setNewTaskContent('');
        }
    };

    return (
        <div className="new-task">
            <input
                type="text"
                placeholder="Adicione um novo item aqui"
                value={newTaskContent}
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
                className="new-task-input"
            />
            <Icon onClick={handleCreateTask} iconName={"add-to-list.svg"} size={"30px"} className="new-task-button" hover></Icon>
        </div>
    );
};

export default NewTask;
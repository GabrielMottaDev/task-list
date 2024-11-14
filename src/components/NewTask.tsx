import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Icon from './Icon';

type NewTaskProps = {
    onCreate: (taskContent: string) => void;
};

const NewTask = ({ onCreate }: NewTaskProps) => {

    const [newTaskContent, setNewTaskContent] = useState('');

    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCreateTask();
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                placeholder="Add a new item here"
                value={newTaskContent}
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
                className="new-task-input"
            />
            <Icon onClick={handleCreateTask} iconName={"add-to-list.svg"} size={30} className="new-task-button" hover></Icon>
        </div>
    );
};

export default NewTask;
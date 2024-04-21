import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const Task = ({ task, index, onCheck, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(task.content);
    const editRef = useRef(null);

    useEffect(() => {
        // console.log(editRef);
        if (!editRef.current) {
            return;
        }
        // editRef.current.style.backgroundColor = "blue";

        const textareaLineHeight = 24; // Adjust according to your textarea's styling
        const previousRows = editRef.current.rows;
        editRef.current.rows = 1; // Reset rows to 1 to calculate new height

        const currentRows = Math.ceil((editRef.current.scrollHeight - 4) / textareaLineHeight);

        if (currentRows === previousRows) {
            editRef.current.rows = currentRows;
        }

        setRows(currentRows);
    }, [isEditing, editedContent]);

    useEffect(() => {
        if (task.done) {
            setIsEditing(false);
        }
    }, [task.done]);

    useEffect(() => {
        setEditedContent(task.content);
    }, [task.content]);

    const handleCheckboxChange = (doneState) => {
        onCheck(task.id, doneState);
    };

    const handleClick = () => {
        // if(isEditing){
        //     setIsEditing(false);
        // }
    }

    const handleDoubleClick = () => {
        if (!task.done) {
            setIsEditing(true);
        }
    };


    const handleEditChange = (e) => {
        setEditedContent(e.target.value);
    };

    const handleEditBlur = () => {
        // setIsEditing(false);
        // if (task.content !== editedContent) {
        //     onEdit(task.id, editedContent);
        // }
        handleOnEdit();
    };

    const handleEditKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleOnEdit();
        }
    }

    const handleOnEdit = () => {
        if (editedContent.trim() === '') {
            handleOnDelete();
        } else {
            setIsEditing(false);
            if (task.content !== editedContent) {
                onEdit(task.id, editedContent);
            }
        }
    };

    const handleOnDelete = () => {
        onDelete(task.id);
    }

    const [rows, setRows] = useState(1);

    return (

        <div className={`task ${task.done ? 'done' : ''}`} onClick={handleClick} onDoubleClick={handleDoubleClick}>
            {
                task.done ? (
                    <Icon onClick={() => { handleCheckboxChange(false) }} iconName={"square-checked.svg"} size={"28px"}></Icon>
                ) : (
                    <Icon onClick={() => { handleCheckboxChange(true) }} iconName={"square.svg"} size={"28px"} style={{ transform: "translateX(-2px)" }}></Icon>
                )
            }

            {isEditing ? (
                <textarea
                    type="text"
                    value={editedContent}
                    onKeyDown={handleEditKeyDown}
                    onChange={handleEditChange}
                    onBlur={handleEditBlur}
                    autoFocus
                    className="task-data edit-input"
                    rows={rows}
                    ref={editRef}
                // onChange={handleTextAreaChange}
                />
            ) : (
                <>
                    <div className="task-data task-content"><p className="task-text">{task.content}</p></div>
                    {
                        !task.done && (
                            <Icon onClick={() => { handleDoubleClick() }} iconName={"edit.svg"} size={"22px"} style={{ marginLeft: 'auto', marginRight: '15px' }}></Icon>
                        )
                    }
                </>
            )}

            {isEditing ? (
                <Icon onClick={() => { handleOnEdit() }} iconName={"edit.svg"} size={"22px"} style={{ marginLeft: '0px' }}></Icon>
            ) : (
                <Icon onClick={() => { handleOnDelete() }} iconName={"delete.svg"} size={"22px"} style={{ marginLeft: '0px' }}></Icon>
            )}
        </div>
    );
};

export default Task;

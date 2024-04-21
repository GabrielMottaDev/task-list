import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task';
import NewTask from './NewTask';

const TaskList = ({ tasks, onDragEnd, onEdit, onCheck, onCreate, onDelete }) => {

  const [isOverflowing, setIsOverflowing] = useState(false);

  const handleResize = () => {
    const isBodyVerticallyOverflowing = document.body.clientHeight > window.innerHeight;
    setIsOverflowing(isBodyVerticallyOverflowing);
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleResize();
  }, [tasks]);

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const newOnCreate = (...itens) => {
    onCreate(itens);
    scrollToBottom();
  };

  return (
    <div className='task-list'>
      {
        isOverflowing && (
          <NewTask onCreate={newOnCreate}></NewTask>
        )
      }
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Task
                        task={task}
                        index={index}
                        onEdit={onEdit}
                        onCheck={onCheck}
                        onDelete={onDelete}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <NewTask onCreate={newOnCreate}></NewTask>
    </div>
  );
};

export default TaskList;
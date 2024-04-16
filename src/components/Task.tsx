import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCheck, faUndo } from '@fortawesome/free-solid-svg-icons'
import './Task.css';
import { useEffect, useState } from 'react';

function Task(props: any){

    const colors = ['green', 'red', 'yellow', 'orange', 'purple', 'violet', 'brown', 'blue', 'teal']

    const [borderColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

    const borderStyle = {
        borderBottom: `2px solid ${borderColor}`
    }

    useEffect(()=> {
        console.log();
    }, [])

    return (
        <div className="task-card" style={borderStyle}>
            <h3 style={props.isDone ? {textDecoration: 'line-through'} : {}}>{props.name}</h3>
            <div className="actions">
                <div className="action done" onClick={() => {props.onClickDone(props.taskId)}}>
                <FontAwesomeIcon icon={faCheck}/>
                    <p>Done</p>
                </div>
                <div className="action undo"  onClick={() => {props.onClickUndo(props.taskId)}}>
                    <FontAwesomeIcon icon={faUndo}/>
                    <p>Undo</p>
                </div>
                <div className="action delete"  onClick={() => {props.onClickDelete(props.taskId)}}>
                    <FontAwesomeIcon icon={faX}/>
                    <p>Delete</p>
                </div>
            </div>
        </div>
    );
}

export default Task;
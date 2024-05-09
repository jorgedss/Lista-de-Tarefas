import {Circle, Trash } from 'phosphor-react'
import styles from './Task.module.css'
import {Verify} from './CheckCircle'
import { useState } from 'react';

export function Task ({content,onDeleteTask,onToggle}){

    //Criando um estado para o status da tarefa 
    const [isCompleted, setIsCompleted] = useState(false);


    //Essa função altera o valor do estado, é usada no botão
    const toggleComplete = () => {
        setIsCompleted(!isCompleted);
        onToggle()
    };



    function handleDeleteTask(){
        onDeleteTask(content);
    }



    return (
        


        <div className={styles.task}>
        
            <button 
                className={styles.circleButton}
                value={isCompleted}
                onClick={()=>{toggleComplete()}}
            >
                
                {isCompleted ? <Verify/>: <Circle color='#4EA8DE' size={24} />}
                
                

            
            
                
            </button>
            
            <div className={isCompleted?styles.taskComplete:styles.taskIncomplete}>
                <p> {content} </p>
            </div>
           
            <button onClick={handleDeleteTask} className={styles.trashButton}>
                <Trash size={24}  />
            </button>
            
            
        </div>
    )
}
import styles from './List.module.css'
import {Task} from './Task'
import { useState } from 'react';
import {PlusCircle} from 'phosphor-react'

import clipboard from './assets/Clipboard.svg'

export function List (){

    const [tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState('');

    const [nextId, setNextId] = useState(0);


    function handleNewTaskChange(event){
        setNewTask(event.target.value);
    }
    

    function handleCreateNewTask(event){
        event.preventDefault()
        const newTaskObject = {
            id: nextId,
            content: newTask,
            isCompleted: false
        }
    
        setTasks([...tasks, newTaskObject])
        setNextId(nextId+1)
        setNewTask('')
    }

    const toggleTaskStatus = (id) => {
        const updatedTasks = tasks.map(task => {
          if (task.id === id) {
            return { ...task, isCompleted: !task.isCompleted };
          }
          return task;
        });
        setTasks(updatedTasks);
      };

    






    function deleteTask(taskToDelete){

        const listWithoutDeletedTask = tasks.filter(task =>{
            return task.content!= taskToDelete;
        })

        setTasks(listWithoutDeletedTask);

    }



    return (
        <div className={styles.listTasks}>
            
            <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                <textarea
                    name = 'NewTask'
                    maxLength={250}
                    placeholder = 'Adicione uma nova tarefa'
                    value={newTask}
                    onChange={handleNewTaskChange}

                    required/>

                <button type='submit'> 
                    Criar <PlusCircle size={16} weight='bold' color='#F2F2F2'/> 
                </button>


            </form>
            

            <div className={styles.createdAndFinished}>
                <div className={styles.created}>
                    Tarefas criadas
                    <div className={styles.quantity}>
                     {tasks.length}
                    </div>
                </div>

                <div className={styles.finished}>
                    Concluídas
                    <div className={styles.quantity}>
                        {tasks.filter(task =>{return task.isCompleted==true}).length} de {tasks.length}
                    </div>

                </div>
            </div>


            <div className={styles.allTasks}>


                <div className={tasks.length==0?styles.noTasks:styles.noTasksFalse}>
                    <div>
                        <img src={clipboard} alt="#" />
                    </div>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p> Crie tarefas e organize seus itens a fazer</p>
                </div>

                {
                    tasks.map(task =>{
                        return( 
                            
                        <Task 
                            key={task.id}
                            content = {task.content}
                            onDeleteTask ={deleteTask}
                            onToggle={() => toggleTaskStatus(task.id)}
                            
                        
                        />)
                    })
                }
            
                               
               

            </div>

        </div>

    )
}
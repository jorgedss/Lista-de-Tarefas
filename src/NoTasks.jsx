import styles from './NoTasks.module.css'
import clipboard from './assets/Clipboard.svg'

export function NoTasks (){
    return(
        <div className={styles.noTasks}>
            <div>
                <img src={clipboard} alt="#" />
            </div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p> Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}
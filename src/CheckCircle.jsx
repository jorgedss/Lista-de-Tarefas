import styles from './CheckCircle.module.css'
import {Check} from 'phosphor-react'

export function Verify (){
    return(
        <div className={styles.icon}>
            <Check size={14} color="white" weight="bold" />
        </div>
    )
}
import {Header}  from './Header.jsx'

import styles from './App.module.css'
import { List } from './List.jsx'
import {useState} from 'react'






export function App() {








    


  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>        
        <List />
      </div>

    </div>
  )
}



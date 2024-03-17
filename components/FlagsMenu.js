import styles from './menu.module.scss';
import { useState } from 'react';

const FlagsMenu = ({ flags, setSelectedFlag }) => {
  const [id, setId] = useState(null);
console.log(id)
  return (
    <div className={styles['flags-menu']}>
      {
        flags.map(flag => (
          <div className={styles['flags']} key={flag.id} onClick={()=>setSelectedFlag(flag)}
          /* style={{backgroundColor: id===flag.id? "#D9D9D9":"E9E9E9"}} onMouseEnter={()=>setId(flag.id)} onMouseLeave={()=>setId(null)} */>
            <img src={flag.src} width="30" height="20" />
            <span className='p-1'>{flag.A2}</span>
            <span style={{ lineHeight: '30px' }}>{flag.code}</span>
          </div>
        ))
      }
    </div>
  )
}

export default FlagsMenu
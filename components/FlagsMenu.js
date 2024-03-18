import styles from './menu.module.scss';
import { useState } from 'react';

const FlagsMenu = ({ flags, setSelectedFlag }) => {
  const [id, setId] = useState(null);

  return (
    <div className={styles['flags-menu']}>
      {
        flags.map(flag => (
          <div className={styles['flags']} key={flag.id} onClick={()=>setSelectedFlag(flag)}>
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
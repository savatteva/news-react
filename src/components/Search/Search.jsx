import styles from './styles.module.css'

const Seacrh = ({keywords, setKeywords}) => {
  return (
    <div className={styles.search}>
      <input 
        type='text' 
        value={keywords} 
        className={styles.input} 
        onChange={(e) => setKeywords(e.target.value)}
        placeholder='type to search..'
      />
    </div>
  )
}

export default Seacrh
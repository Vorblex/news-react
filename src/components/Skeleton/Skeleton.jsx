import styles from './styles.module.css'

const Skeleton = ({ count = 1, type = 'banner' }) => {
  const classes = type === 'banner' ? styles.banner : styles.item

  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
          {[...Array(count)].map((_, index) => (
            <li key={index} className={classes}></li>
          ))}
        </ul>
      ) : (
        <div className={classes}></div>
      )}
    </>
  )
}

export default Skeleton

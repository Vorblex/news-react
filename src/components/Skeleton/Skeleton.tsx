import styles from './styles.module.css'

const Skeleton = ({ count = 1, type = 'banner', direction = 'column' }) => {
  const classes = type === 'banner' ? styles.banner : styles.item

  return (
    <>
      {count > 1 ? (
        <ul className={direction === 'column' ? styles.columnList : styles.rowList}>
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

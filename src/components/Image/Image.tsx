import styles from './styles.module.css'

interface Props {
  src: string
}

const Image = ({ src }: Props) => {
  return (
    <div className={styles.wrapper}>
      {src && <img className={styles.image} src={src} alt="news" />}
    </div>
  )
}

export default Image

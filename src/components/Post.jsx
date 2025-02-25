import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/gabrielmelo04.png" />
          <div className={styles.authorInfo}>
            <strong>Gabriel Melo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='25 de Fevereiro às 15:27' dateTime='2024-02-25 15:27:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>

        <p><a href="#">#novoprojeto</a>{' '} <a href="#">#nlw</a>{' '} <a href="#">#rocketseat</a></p>
      </div>
    </article>
  )
}

// Ir para a aula Formulário de comentários
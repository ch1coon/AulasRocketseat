import styles from ".Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/ch1coon.png"' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Francisco Carlos</strong>
              <time title="11 de Maio às 08:51" dateTime="2023-07-26 08:49:38">
                Cerca de 1 h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
          </button>
        </footer>
      </div>
    </div>
  );
}

import styles from ".Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src='https://github.com/ch1coon.png"' />

      <div className={styles.commentBox}></div>
    </div>
  );
}

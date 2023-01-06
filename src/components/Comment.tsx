import { ThumbsUp, TrashSimple } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }:CommentProps ) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content)
  }
  
  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    });  
  }

  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://avatars.githubusercontent.com/u/67610170?v=4"
        alt="" 
        
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mateus S. Santos</strong>
              <time title="02 de Janeiro às 15:34h" dateTime="2023-01-02 15:34:30">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <TrashSimple size={24}/>
            </button>
          </header>

          <p>{content}</p> {/*Usando a prop ja desestruturada em CONTENT)*/}
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
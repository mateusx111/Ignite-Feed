import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;

}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];

}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    // a estrutura em [] ja usa a desestruturação
    'Post muito bacana, hein?!', // Por ter criado o estado comments dentro do componet post, esse estado fará efeito em todos os posts
  ])

  const [newCommentText, setNewCommentText] = useState('') //inicializar o estado com o tipo de conteuso que vou ter posteriormente aqui uma String vazia

  const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' H:mm'h'",{
      locale: ptBR,
    }) // formato de data com date-fns

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  }) // formato de data com date-fns

  function handleCreateNewComment(event: FormEvent) { //funcção usada no form
    event.preventDefault() // evita o comportamento padrão do HTML de redirecionar o usuario para outro lugar

    {/*USANDO A FUNÇÃO QUE ATUALIZA O ESTADADO */}
    setComments([...comments, newCommentText]) //spread operator e newCommentText, para adicionar mais um novo comentario do usuario 
    //com o useState não usa mais o push() //comments.push(3) // comments é meu array. Push() vai adicionar um comentario ao array
    setNewCommentText('') // para voltar o valor original
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) { // funcção usada no textarea do form
    {/*USANDO A FUNÇÃO QUE ATUALIZA O ESTADADO */}                          //<HTMLTextAreaElement> para o TS saber onde no HTML ocorre o event                 
    event.target.setCustomValidity('') //quando o usuario digitar novamente o campo volta para um valor vazio
    setNewCommentText(event.target.value) // Armazenando o text digitado pelo usuario no estado
    //agora o newCommentText já tem o valor digitado mais recente dentro da textarea. usando ela pode ADICIONAR UM novo comentario no final
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) { //funnção para orientar o preenchimento do fomrulário com a mensagem do browser
    event.target.setCustomValidity('esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete: string) {
    // imutabilidade ---> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memoria)
    const CommentsWithoutDeletedOnes = comments.filter(comment => {
      return comment !== commentToDelete
    })
    
    setComments(CommentsWithoutDeletedOnes);
  }

  const isNewCommenTempty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title="{publishedDateFormatted}"
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}{' '}
          {/*  formato de data com date-fns par ver com precisão no HTML com inspect*/}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p> // a key dever ser colocada no primeiro elemento que aparer de retorno de um map
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment" 
          placeholder="Deixe um comentario"
          value={newCommentText}
          onChange={handleNewCommentChange} //monitorar toda vez que tiver um,a mudança no tetarea e chamar a função handleNewCommentChange
          onInvalid={handleNewCommentInvalid} // para ser chamada quando o html identificar uma tentativa de submit de formulario porem o campo do texte estava vazio
          required //no react quando uma propriedade recebe o valor true eu n preciso informar o valor
        />

        <footer>
          <button 
            type="submit" 
            disabled={isNewCommenTempty}>
              Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  )
}

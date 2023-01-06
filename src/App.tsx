import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/sidebar'
import { Avatar } from './components/Avatar'

import styles from './App.module.css'

import './global.css'
import { Footer } from './components/Footer'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/67610170?v=4',
      name: 'Mateus Souza',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content:'Olá, estou procurando vagas.Sou desenvolvedor e busco novas oportunidades remotas. Me chamgem no link abaixo.',},
      { type: 'link', content: '👉 Link do meu Linkedin' },
    ],
    publishedAt: new Date('2023-01-03 14:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://st3.depositphotos.com/1007995/14080/i/450/depositphotos_140801800-stock-photo-dramatic-young-guitarist-looking-back.jpg',
      name: 'Diego Fernandes',
      role: 'Educator',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera apresento pra vocês Pacnic At Disco' },
      { type: 'paragraph', content: 'Pacnic At Disco é uma das melhores bandadas de rock. Venha ouvir seus maiosres sucessos',},
      { type: 'link', content: 'Assista aqui' },
    ],
    publishedAt: new Date('2023-01-04 14:35:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
        <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      <Footer />
    </div>
  )
}

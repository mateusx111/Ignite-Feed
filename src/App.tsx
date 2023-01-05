import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/sidebar'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/67610170?v=4',
      name: 'Mateus Souza',
      role: 'web developer @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto éDoctorCare 🚀',},
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-01-03 14:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto éDoctorCare 🚀',},
      { type: 'link', content: '👉 jane.design/doctorcare' },
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
    </div>
  )
}

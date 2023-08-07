import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga odio voluptas voluptate rem dolores earum culpa, voluptatibus id nisi, qui, quae tempore quas facilis numquam blanditiis modi autem."
          />
          <Post
            author="Gabriel Guzzi"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga odio voluptas voluptate rem dolores earum culpa, voluptatibus id nisi, qui, quae tempore quas facilis numquam blanditiis modi autem."
          />
        </main>
      </div>
    </div>
  );
}

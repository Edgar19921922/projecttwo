import styles from "./app.module.scss";
import { Modal } from "./components/modal/modal";

export function App() {
  return (

    <div className={styles.container}>
      <h1>Java</h1>
         <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat
        recusandae modi. Enim, illum perspiciatis facilis fuga consequuntur ea
        quis ut, rem veritatis qui eligendi saepe modi aliquam delectus
        accusantium.
      </p>
      <Modal ></Modal>
    </div>
  );
}

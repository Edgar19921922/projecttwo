import styles from "./app.module.scss";
import { Modal } from "./components/modal/modal";
import {useModal} from "./hooks/use-modal"

export function App() {
const {close,open,isOpen,ok} =  useModal({})


  return (

    <div className={styles.container}>
      <h1>Java</h1>
         <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint repellat
        recusandae modi. Enim, illum perspiciatis facilis fuga consequuntur ea
        quis ut, rem veritatis qui eligendi saepe modi aliquam delectus
        accusantium.
      </p>
      <Modal isOpen={isOpen} onClose={close} onOk={ok} />
      <button onClick={open} >opennn</button>
    </div>
  );
}

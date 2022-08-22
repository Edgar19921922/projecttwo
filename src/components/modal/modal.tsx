import { FC } from "react";
import styles from "./modal.module.scss";
import cn from "classnames"

interface IProps {
  isOpen: boolean;
  onClose: ()=>void;
  onOk:()=>void
}

export const Modal: FC<IProps> = ({ isOpen,onClose,onOk }) => {
  return isOpen ? (
    <div className={styles.modal}>
      <div className={cn(styles.overlay,{
		[styles.open]:isOpen
	  })}>
        <div className={cn(styles.window,{
			[styles.open]:isOpen
		})}>
          <div className={styles.header}>
            <span className={styles.title}>TITLE</span>
            <button onClick={onClose} className={styles.close}>&times;</button>
          </div>
          <div className={styles.body}>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className={styles.footer}>
            <button onClick={onOk} >ok</button>
            <button onClick={onClose} >cancel</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

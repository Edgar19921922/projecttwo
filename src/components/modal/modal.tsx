import styles from "./modal.module.scss"
export const Modal = ()=>{
return <div className={styles.modal} >
	<div className={styles.overlay} >
		<div className={styles.window} >
			<div className={styles.header}>
				<span className={styles.title} >TITLE</span>
				<span className={styles.close} >&times;</span>
			</div>
			<div  className={styles.body}></div >
			<div className={styles.footer}></div>

		</div>
	</div>
</div>
}
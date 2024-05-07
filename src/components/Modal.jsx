import classes from "./Modal.module.css";

function Modal({ children, onclose }) {
    return (
        <>
            <div className={classes.backdrop} onClick={onclose} />
            <dialog open className={classes.modal} >{children} </dialog>
        </>
    );
}
export default Modal;                
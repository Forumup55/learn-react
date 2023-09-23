function Modal(props) {
    return (
        <div onClick={props.cancelModal} className="backDrop">
            <div onClick={($event) => $event.stopPropagation()} className="popUp">
                <div>
                    {props.todo.title}
                </div>

                <div className='btns'>
                    <button onClick={props.cancelModal}>Cancel</button>

                    <button onClick={() => props.confirmModal(props.todo.id)}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;

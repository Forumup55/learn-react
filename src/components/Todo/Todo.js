import { useState } from "react"
import Modal from "../Shared/confirmModal"
import "./Todo.css"

function Todo(props) {
    const [isCompleted, setToTrue] = useState(props.data.completed)

    const [isShown, showModal] = useState(false)

    function cancelModal() {
        showModal(false)
    }

    function confirmModal(id) {
        props.confirmModal(id)
    }

    return (
        <div className="card">
            <div>
                <h3 className="title">{props.data.title}</h3>

                <p className="body">Do Homework...</p>
            </div>

            <div className="actions">
                <button className="trash-btn" onClick={() => showModal(true)}>
                    <i className="fa-solid fa-trash"></i>
                </button>

                <div>
                    <span>Is Completed</span>

                    <button onClick={() => setToTrue(true)}>
                        {isCompleted.toString()}
                    </button>
                </div>
            </div>

            {isShown && <Modal todo={props.data} cancelModal={cancelModal} confirmModal={confirmModal} />}
        </div>
    )
}
export default Todo;
// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onClickDeleteButton = () => {
    deleteTodo(id)
  }

  return (
    <li className="single-todo-element">
      <p className="title-text">{title}</p>
      <button
        className="Delete-button"
        type="button"
        onClick={onClickDeleteButton}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem

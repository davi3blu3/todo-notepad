const React = require('react')
const ReactDOM = require('react-dom')

const ToDoApp = (
    <div>
        <div className="container paper">
            <div className="lines"></div>
            <h2 className="title">To-Do List</h2>
            <ul className="list">
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Get Up<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Shower<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Let Dexter Out<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Make Breakfast<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Go to Work<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Go to the Gym<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Make Dinner<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Write Code!<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Brush Teeth<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
                <img src="img/check.png" alt="check mark" className="done" /><li className="">Go to Sleep<img src="img/delete.png" alt="delete x mark" className="delete" /><img src="img/pencil.png" alt="pencil icon" className="edit" /></li>
            </ul>
        </div>
        <div className="container">
            <input type="text" className="new-to-do new-item" placeholder="Add New To-Do" />
            <button className="new-to-do add-new">+</button>
        </div>
    </div>
)

ReactDOM.render(ToDoApp, document.getElementById('app'))

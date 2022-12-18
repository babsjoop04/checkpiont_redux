import { useState } from "react";
import { connect } from "react-redux";
import CreateTodo from "../ReduxDoc/Action/CreateTodo";



const mapStateToProps = ({ storageAll }) => {
    return {
        storageAll: storageAll
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchTask: (task) => dispatch(CreateTodo(task)),
    };
};

const AddTask = ({ dispatchTask, storageAll }) => {

    //declaration state var to store the number of additions made
    const [count, setCount] = useState(0);

    const Add = () => {


        // recovery of data entered
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const tabRadio = document.getElementsByName("asDone");
        if (title !== "" && description !== "") {
            let asDone;
            if (tabRadio[0].checked)
                asDone = true;
            else if (tabRadio[1].checked)
                asDone = false;

            //dispatch action to add a new task
            dispatchTask({
                id: [...storageAll].length + 1,
                title: title,
                description: description,
                asDone: asDone,
            });

            setCount((count) => count + 1);

            //reset input to avoid errors

            document.getElementById("title").value = ""
            document.getElementById("description").value = ""
        } else alert("Please complete this form!!");
    };

    return (
        <div className="col">
            <div className="row d-flex justify-content-center" id="FormAddTask">
                <h2>Complete this form for adding new tasks</h2>
                <div className="col-9">
                    <label htmlFor="title" className="h3">
                        Title :
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Give a title to the task"
                    />
                    <br />
                    <label htmlFor="description" className="h3">
                        The task to do :
                    </label>
                    <textarea
                        name="task"
                        className="form-control"
                        id="description"
                        placeholder="Give the description of the task"
                        rows="1"
                    ></textarea>
                    <br />
                    <span>Has the task been done?</span>
                    <input type="radio" name="asDone" id="trueCheck" />
                    <span>True</span>&nbsp;
                    <input type="radio" name="asDone" id="falseCheck" />
                    <span>False</span>
                    <br />
                    <button className="btn btn-primary" id="addNewTask" onClick={Add}>
                        Add this task
                    </button>
                </div>
                <h3>You have just added {count} new tasks</h3>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

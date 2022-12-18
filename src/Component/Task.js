import { useState } from "react";
import { connect } from "react-redux";
import CreateEditTodo from "../ReduxDoc/Action/CreateEditTodo";


const mapDispatchToProps = (dispatch) => {
    return {
        dispatchEditTask: (payload) => dispatch(CreateEditTodo(payload))

    }

}

const Task = ({ id, title, description, asDone, dispatchEditTask }) => {
    const newid = id
    const [notEditing, setEdit] = useState(true)


    const Save = () => {

        const newTitle = document.getElementById("newTitle").value
        const newDescription = document.getElementById("newDescription").value
        const tabNewradio = document.getElementsByName("newAsDone")
        if (newTitle !== "" && newDescription !== "") {
            let newAsDone
            if (tabNewradio[0].checked)
                newAsDone = true
            else if (tabNewradio[1].checked)
                newAsDone = false


            dispatchEditTask({
                id: newid,
                title: newTitle,
                description: newDescription,
                asDone: newAsDone
            })
            setEdit(true)
        } else
            alert("Please complete this form for editing!!")

    }
    return (
        notEditing ?
            <div className="col-3 mb-2" id={id}>
                <span className="badge rounded-pill bg-info">New task</span>
                <div className="row">
                    <p className="h1">{title}</p>
                </div>
                <div className="row">
                    <p className="h5">Description : {description}</p>
                    <p className="h5">Task has been done ?: {asDone ? <span className=" text-success">Yes</span> : <span className="text-danger">No</span>}</p>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger btn-sm" onClick={() => setEdit(false)}>Edit</button>
                    </div>
                </div>
            </div>
            :
            <div className="col-3" id={`task:${id}`}>
                <span className="badge rounded-pill bg-danger">Editing task</span>

                <div className="row">
                    <span className="h1">Title:</span>
                    <input type="text" id="newTitle" placeholder="Give the new title" />
                </div>
                <div className="row">
                    <span className="h5">Description : </span>
                    <input type="text" id="newDescription" placeholder="Give the new description" /><br />
                    <span className="h5">Task has been done ?:</span>
                    <div className="d-flex justify-content-center">
                        <input type="radio" name="newAsDone" id="newTrueCheck" /><span>true</span>
                        <input type="radio" name="newAsDone" id="newFalseCheck" /><span>false</span>

                    </div><br />

                    <div className="col">

                        <button className="btn btn-success btn-sm" onClick={Save}>Click here to save</button><br />
                    </div>

                    <div className="col">

                        <button className="btn btn-danger  btn-sm" id="buttonCancel" onClick={() => setEdit(true)}>Cancel</button>
                    </div>
                </div>
            </div>



    );
};

export default connect(null, mapDispatchToProps)(Task);

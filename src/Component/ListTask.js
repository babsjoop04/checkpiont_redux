import FormFilter from "./FormFilter"
import { connect } from "react-redux";
import Task from "./Task";

const mapStateToProps = ({ tasks }) => {
    return {
        tasks: [...tasks]
    }

}

const ListTask = ({ tasks }) => {
    return (
        <div className="">
            <FormFilter />
            <div className="row">
                <div className="col">

                    <h2>Tasks :</h2>
                </div>
            </div>
            <div className="row" id="showTasks">
                {
                    tasks.map((task) => {
                        return <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            asDone={task.asDone} />
                    })
                }
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(ListTask);
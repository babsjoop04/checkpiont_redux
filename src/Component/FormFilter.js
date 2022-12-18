import { connect } from "react-redux";
import CreateSeeAll from "../ReduxDoc/Action/CreateSeeAll";
import FilterTodo from "../ReduxDoc/Action/FilterTodo";

const mapStateToProps = ({ displayButtonSeeAll }) => {
    return {
        displayButtonSeeAll: displayButtonSeeAll
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFilter: (task) => dispatch(FilterTodo(task)),
        dispatchSeeAll: () => dispatch(CreateSeeAll(null)),
    };
};

const FormFilter = ({ dispatchFilter, dispatchSeeAll, displayButtonSeeAll }) => {


    const Filter = () => {

        // filter mode recovery
        // and dispatch the action to filter

        const tabRadioFilter = document.getElementsByName("FilterMode");
        if (tabRadioFilter[0].checked) {
            dispatchFilter({
                filterMode: true,
            });
        } else if (tabRadioFilter[1].checked) {
            dispatchFilter({
                filterMode: false,
            });
        } else
            alert("please select a filter mode!!")
    };

    return (
        <div className="row d-flex justify-content-end mb-1">
            <div className="col-9 " id="filter">
                <input type="radio" name="FilterMode" id="trueFilterMode" />
                <span>Task already done</span>&nbsp;&nbsp;&nbsp;
                <input type="radio" name="FilterMode" id="falseFilterMode" />
                <span>Task not yet done</span>&nbsp;&nbsp;&nbsp;
                <button id="filterBut" className="btn btn-primary" onClick={Filter}>
                    Filter
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                    id="buttonSeeAll"
                    className="btn btn-primary"
                    onClick={() => dispatchSeeAll()}
                    style={{ display: displayButtonSeeAll }}
                >
                    Click here to show all tasks
                </button>
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);

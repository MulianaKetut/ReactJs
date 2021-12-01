import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KanbanList from "../components/KanbanList";
import { moveTask } from "../redux/actions";

class Kanban extends React.Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  getTasks(list, tasks) {
    return _.map(list.tasks, (taskId) => tasks[taskId]);
  }

  onDragEnd({ source, destination, draggableId }) {
    if (!destination) {
      return;
    }

    if (source.droppableId !== destination.droppableId) {
      this.props.moveTask(
        source.droppableId,
        destination.droppableId,
        draggableId
      );
    }
  }

  render() {
    const lists = this.props.lists;
    const tasks = this.props.tasks;

    return (
      <div className="row">
        <DragDropContext onDragEnd={this.onDragEnd}>
          {lists.map((list) => (
            <Droppable droppableId={list.id} key={list.id}>
              {(provided, snapshot) => (
                <KanbanList
                  list={list}
                  tasks={this.getTasks(list, tasks)}
                  innerRef={provided.innerRef}
                  provided={provided}
                />
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: _.values(state.lists),
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  moveTask: (fromListId, toListId, id) =>
    dispatch(moveTask(fromListId, toListId, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kanban);

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Label,
  Input,
  FormGroup,
  Form,
  UncontrolledAlert,
  Badge
} from "reactstrap";
import Todo from "./todo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todo: ""
    };
  }

  addTodo = () => {
    if (this.state.todo.length > 0) {
      let todosCopy = this.state.todos.slice();
      todosCopy.push(this.state.todo);
      console.log(todosCopy);
      this.setState({ todos: todosCopy });
      this.setState({ todo: "" });
    }
  };

  handleDelete = id => {
    console.log("delet");
    let todosCopy = this.state.todos.filter((v, i) => {
      console.log(id + " " + v + " " + i);
      console.log(id !== i);
      return id !== i;
    });
    this.setState({ todos: todosCopy });
  };
  onChange = e => {
    this.setState({ todo: e.target.value });
  };
  handleDeleteAll = () => {
    this.setState({ todos: [] });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Form>
            <FormGroup check>
              <h3 style={{ margin: "1em" }}>
                Todos:
                {this.state.todos.length === 0 ? (
                  <Badge color="warning">{this.state.todos.length}</Badge>
                ) : (
                  <Badge color="success">{this.state.todos.length}</Badge>
                )}
              </h3>
              <Label for="todo">Todo:</Label>
              <Input
                name="todo"
                id="todo"
                value={this.state.todo}
                placeholder="Your todo here ..."
                onChange={this.onChange}
              />

              <div>
                <Button
                  color="primary"
                  onClick={this.addTodo}
                  style={{ margin: 2 }}
                >
                  Add
                </Button>

                {this.state.todos.length > 1 && (
                  <Button
                    style={{ margin: 3 }}
                    color="danger"
                    onClick={this.handleDeleteAll}
                  >
                    Delete All
                  </Button>
                )}
              </div>
            </FormGroup>
          </Form>
          <br />

          {this.state.todos.length == 0 ? (
            <UncontrolledAlert color="warning" style={{ margin: 20 }}>
              "No Todos Yet"
            </UncontrolledAlert>
          ) : (
            <div style={{ margin: 20 }}>{this.getTodos()}</div>
          )}
        </div>
      </React.Fragment>
    );
  }

  getTodos() {
    return this.state.todos.map((e, i) => {
      return (
        <Todo todo={e} key={i} id={i} onDelete={() => this.handleDelete(i)} />
      );
    });
  }
}

export default App;

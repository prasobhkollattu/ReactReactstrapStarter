import React, { Component } from "react";
import {
  Button,
  InputGroupAddon,
  InputGroup,
  InputGroupText
} from "reactstrap";
const Todo = ({ todo, id, onDelete }) => {
  return (
    <React.Fragment>
      <span style={{ margin: 0.1 }}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              {" "}
              <span className="col-md-6" key={id}>
                {todo}
              </span>
            </InputGroupText>
          </InputGroupAddon>
          <Button color="danger" onClick={onDelete}>
            X
          </Button>
        </InputGroup>
      </span>
    </React.Fragment>
  );
};

export default Todo;

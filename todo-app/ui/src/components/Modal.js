import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
        <ModalBody>
          <Form onSubmit={() => onSave(this.state.activeItem)}>
            <FormGroup>
              <Label for="todo-content">Content</Label>
              <Input
                type="text"
                id="todo-content"
                name="content"
                value={this.state.activeItem.content}
                onChange={this.handleChange}
                placeholder=""
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            type="submit"
            color="success"
            onClick={() => onSave(this.state.activeItem)}
          >
            Save
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
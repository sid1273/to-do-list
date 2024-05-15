import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';




const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddToDo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { text: inputValue, isDone: false, isEditing: false }]);
      setInputValue('');
    }
  };

  const handleEditToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isEditing = true;
    setTodos(newTodos);
  };

  const handleSaveEdit = (index, newText) => {
    if (newText.trim() !== ''){
    const newTodos = [...todos];
    newTodos[index].text = newText;
    newTodos[index].isEditing = false;
    setTodos(newTodos);
    }
  };

  const handleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const handleDeleteDoneTodos = () => {
    const newTodos = todos.filter(todo => !todo.isDone);
    setTodos(newTodos);
  };

  const handleEditInputChange = (e, index) => {
    const newTodos = [...todos];
    newTodos[index].text = e.target.value;
    setTodos(newTodos);
  };

  return (
    <>
    <Container className='d-flex justify-content-center' style={{margin:'20px 20px'}}>
      <FloatingLabel
        controlId="floatingInput"
        label="Add Task here"      
      >
      <Form.Control type="text" 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="name@example.com" />
      </FloatingLabel>
      <Button variant="outline-secondary"  style={{margin: '5px'}}action onClick={handleAddToDo}>Add</Button>
      </Container>


      <ListGroup style={{backgroundColor: 'blue'}} className='d-flex justify-content-center'>
        {todos.map((todo, index) => (
          <ListGroup.Item style={{textWrap: 'balance'}} key={index}>
            {todo.isEditing ? (
                <FloatingLabel
                controlId="floatingInput"
                label="Edit Task Here"
                className="mb-3"
              >
                <Form.Control type="text" 
                className='d-flex justify-content-center' 
                value={todo.text} 
                onChange={(e) => handleEditInputChange(e, index)}
                onBlur={() => handleSaveEdit(index, todo.text)} placeholder='Edit task here'autoFocus />
              </FloatingLabel>

            ) : (
              <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
            )}
            <Button  size='sm' style={{margin: '5px'}} variant="outline-secondary" onClick={() => handleDone(index)}>{todo.isDone ? 'Undo' : 'Done'}</Button>
            
            {!todo.isDone && !todo.isEditing && 
            (<Button size='sm' variant="outline-secondary" onClick={() => handleEditToDo(index)}>Edit</Button>)}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Container className='d-flex justify-content-center'>
      {todos.some(todo => todo.isDone) && (
        <Button style={{margin: '10px 10px'}}  variant="outline-secondary" onClick={handleDeleteDoneTodos}>Delete All Done Tasks</Button>
      )}
      </Container>
    </>
  );
};

export default ToDoList;

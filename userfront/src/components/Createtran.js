import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

class NewEmployeeComponent extends React.Component {
  render(){
  const formik = useFormik({
    initialValues: {
      Id: '',
      Name: '',
      Location: '',
      Salary:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <div>
    <h2>Enter Employee Details...</h2>
    <form onSubmit={formik.handleSubmit}>
      <p>
      <label htmlFor="Id">Employee ID </label>
      <input
        id="Id"
        name="Id"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Id}
      />
      </p>
      
      <p>
      <label htmlFor="Name">Employee Name </label>
      <input
        id="Name"
        name="Name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Name}
      />
      </p>
      <p>
      <label htmlFor="Location">Employee Location </label>
      <input
        id="Location"
        name="Location"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Location}
      />
      </p>
      <p>
      <label htmlFor="Salary">Employee Salary </label>
      <input
        id="Salary"
        name="Salary"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Salary}
      />
      </p>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
  }
};

const element=<NewEmployeeForm></NewEmployeeForm>

ReactDOM.render(element,document.getElementById("root"));


/*import React from "react";

class Createtran extends React.Component {
  state = {
    id:0,
    date:0,
    category:"",
    amount:0
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  createStudent = e => {
    fetch(`/transaction/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(state),
    })
  };


  render() {
    return (
        <div>
        <h1>Form</h1>
      <Form >
        <FormGroup>
          <Label for="id">id:</Label>
          <Input
            type="number"
            name="id"
           
        />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date:</Label>
          <Input
            type="date"
            name="date"
            
          />
        </FormGroup>
        
        <Button>Send</Button>
      </Form>
      </div>
    );
  }
}

export default Createtran;
/*
<FormGroup>
          <Label for="category">Category:</Label>
          <Input
            type="text"
            name="category"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.category)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="amount">amount:</Label>
          <Input
            type="number"
            name="amount"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.amount)}
          />
        </FormGroup>*/
import React, {Component} from "react";
import Search from "./SearchBar";
// import Navbar from "./Navbar"
import EmployeeDB from "../models/employee"
import "../empContainer.css";

class Employee extends Component {
    state = {
      results: [],
      sort : "asc",
      searchedEmp: ''
    };
// Hello 
    componentDidMount() {
         const search =null;
         this.employeestoSearch(search);
      }
  
     employeestoSearch = (searchedEmp)=> {
        if(searchedEmp){
           const results = EmployeeDB
           .filter(emp =>{
             const LAST_NAME = emp.lastName.toLowerCase().includes(searchedEmp.toLowerCase());
             const FIRST_NAME= emp.firstName.toLowerCase().includes(searchedEmp.toLowerCase());
             return (
                 LAST_NAME || FIRST_NAME
                 )
            });
                this.setState({
                   searchedEmp: searchedEmp,
                   results: results
                });
        } else 
        if( searchedEmp === null ){
                 this.setState({
                    searchedEmp: searchedEmp,
                    results: EmployeeDB
                });
        }

    };


    handleFormSubmit = (e) => {
        e.preventDefault()
    }

    handleInputChange = (e) =>{
         const value = (e.target.value);
         this.employeestoSearch(value);
    }


    render() {
        return (
            <React.Fragment>
                <div className="container center">
                <Search
                  searchedEmp={this.state.searchedEmp}
                  handleInputChange={this.handleInputChange} 
                  handleFormSubmit={this.handleFormSubmit}
                  />
                    <table className="table table-bordered table-lg center">
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th className="th-lg spacing">Employee Id:</th>
                                <th className="th-lg spacing">First Name:</th>
                                <th className="th-lg spacing">Last Name:</th>
                                <th className="th-lg spacing">Email:</th>
                                <th>Department:</th>
                                <th className="th-lg spacing">Start Date:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.results.map((employee) =>{
                           return(  <tr>
                              <td><img src={employee.picture} height="40" width="40" alt="employeeImage"/> </td>
                              <td>{employee.empId}</td>
                              <td>{employee.firstName}</td>
                              <td>{employee.lastName}</td>
                              <td>{employee.email}</td>
                              <td>{employee.startDate}</td>
                              <td>{employee.department}</td>
                            </tr>)
                            })}
                
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default Employee
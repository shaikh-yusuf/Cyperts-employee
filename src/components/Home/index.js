import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my- ml-auto ">
          Add Employee
        </Link>
        <div className="col-md-70 mx-50 my-5">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Salary</th>
                <th scope="col"></th>
                <th scope="col" >Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.address}</td>
                    <td>{contact.salary}</td>
                    <td>{contact.action}</td>

                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger
                        mr-10"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React, { Component } from "react";
import tableData from "../../tableData.js";
import TableRow from "../tableRow";

class Table extends Component{
    state = {
        tableData: tableData
    };

    render() {
        return (
            <table className="highlight centered">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Home</th>
                </tr>
                </thead>

                <tbody>
                {this.state.tableData.map(person => (
                    <TableRow
                        key={person.first_name}
                        first_name={person.first_name}
                        last_name={person.last_name}
                        home={person.home}
                    />
                ))}
                </tbody>
            </table>
        )
    }
};

export default Table;
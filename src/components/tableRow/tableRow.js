import React from "react";

// props are received from the table component
const TableRow = (props) =>
    <tr>
        <td>{props.first_name}</td>
        {/* if a person does not have a last name, show Unknown */}
        <td>{props.last_name ? props.last_name : "Unknown"}</td>
        <td>{props.home}</td>
    </tr>;

export default TableRow;
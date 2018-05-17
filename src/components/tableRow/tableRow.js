import React from "react";

const TableRow = (props) =>
    <tr>
        <td>{props.first_name}</td>
        <td>{props.last_name}</td>
        <td>{props.home}</td>
    </tr>;

export default TableRow;
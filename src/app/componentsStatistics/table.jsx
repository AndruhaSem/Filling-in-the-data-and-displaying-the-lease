import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

function Table({columns, data, onSort, selectedSort}) {
    return (
        <table>
            <TableHeader
                {...{columns, onSort, selectedSort}}
            />
            <TableBody
                {...{columns, data}}
            />
        </table>
    )
}
export default Table
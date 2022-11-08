import React from "react";
import GroupList from "./groupList";
import UserTable from "./userTable";
import Pagination from "./pagination";
import {useState} from "react";
import api from "../api";
import _ from "lodash"

function Statistics () {
    const [statistic] = useState(api.statistic.fetchAll())
    const [sortBy, setSortBy] = useState({ path: "id", order: "asc" });
    function handleSort(item) {
        setSortBy(item);
    }
    const sortedUsers = _.orderBy(
        statistic,
        [sortBy.path],
        [sortBy.order]
    );
    return (
        <div className="information-container">
            <div className="button-block_menu">
                <GroupList/>
            </div>
            <div className="block-information">
                <div className="block-information">
                   <UserTable
                       statistic={sortedUsers}
                       onSort={handleSort}
                       selectedSort={sortBy}
                   />
                </div>
                <Pagination/>
            </div>
        </div>
    )
}
export default Statistics
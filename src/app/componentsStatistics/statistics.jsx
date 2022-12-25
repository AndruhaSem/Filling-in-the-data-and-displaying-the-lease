import React from "react";
import UserTable from "./userTable";
import Pagination from "./pagination";
import { paginate } from "./paginate";
import { useState } from "react";
import api from "../api";
import _ from "lodash";
import { useEffect } from "react";

function Statistics() {
  const [statistic, setStatistic] = useState();
  const [currentPage, setCurrenPage] = useState(1);
  const pageSize = 12;
  const [sortBy, setSortBy] = useState({ path: "id", order: "asc" });
  function handleSort(item) {
    setSortBy(item);
  }
  const handlePageChange = (pageIndex) => {
    setCurrenPage(pageIndex);
  };
  useEffect(() => {
    api.statistic.fetchAll().then((data) => setStatistic(data));
  }, []);
  console.log(Date.now() + 2 * 60 * 1000);
  function handleDelete(userId) {
    setStatistic(statistic.filter((user) => user.id !== userId));
  }
  if (statistic) {
    const count = statistic.length;
    const sortedUsers = _.orderBy(statistic, [sortBy.path], [sortBy.order]);
    const userCrop = paginate(sortedUsers, currentPage, pageSize);

    return (
      <div className="block-information">
        <div className="block-information">
          {count > 0 && (
            <UserTable
              statistic={userCrop}
              onSort={handleSort}
              selectedSort={sortBy}
              onDelete={handleDelete}
            />
          )}
        </div>
        <div className="flex-pagination">
          <Pagination
            itemCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
  return <h2>Loading....</h2>;
}
export default Statistics;

import React from "react";
import { Link } from "react-router-dom";

function GroupList() {
  return (
    <div className="button-block_menu">
      <ul>
        <li className="button-menu">
          <Link className="button-link" to="/statistic">
            Статистика
          </Link>
        </li>
        <li className="button-menu">
          <Link className="button-link" to="/statistic/bookkeeping">
            Бухгалтерия
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default GroupList;

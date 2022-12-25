import React from "react";
import Table from "./table";

function UserTable({ statistic, onSort, selectedSort, onDelete }) {
  const columns = {
    id: {
      path: "id",
      name: "Номер заказа",
    },
    telephone: {
      name: "Телефон",
      component: (user) => user.telephone,
    },
    name: {
      name: "Фамилия.И.О",
      component: (user) => user.name,
    },
    product: {
      path: "product",
      name: "Товар",
    },
    numberProduct: {
      path: "numberProduct",
      name: "колличество товара",
    },
    payment: {
      path: "payment",
      name: "Способ оплаты",
    },
    deposit: {
      path: "deposit",
      name: "Залог",
    },
    timeRental: {
      name: "Время аренды",
      component: (user) => user.timeRental,
    },
    date: {
      name: "Начало аренды",
      component: (user) => user.date,
    },
    newData: {
      name: "Прошедшие время",
      component: (user) => user.date,
    },
    status: {
      component: (user) => (
        <button onClick={() => onDelete(user.id)} className="btn btn-danger">
          delete
        </button>
      ),
    },
  };
  return (
    <Table
      data={statistic}
      columns={columns}
      onSort={onSort}
      selectedSort={selectedSort}
    />
  );
}
export default UserTable;

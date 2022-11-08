import React from "react";
import Table from "./table";

function UserTable({statistic, onSort, selectedSort}) {
    const columns = {
            id: {
                path: "id",
                name: "Номер заказа"
            },
            telephone: {
                name: "Телефон",
                component: (user) => (
                    user.telephone
                )
            },
            name: {
                path: "name",
                name: "Фамилия.И.О"
            },
            product: {
                path: "product",
                name: "Товар"
            },
            payment: {
                path: "payment",
                name: "Способ оплаты",
            },
            deposit: {
                path: "deposit",
                name: "Залог",
            },
            date: {
                name: "Дата",
                component: (user) => (
                    user.date
                )
            },
            status: {
                path: "status",
                name: "Статистика",
            },
    }
    return (
        <Table
            data={statistic}
            columns={columns}
            onSort={onSort}
            selectedSort={selectedSort}
        />
    )
}
export default UserTable
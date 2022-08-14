import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import UserService from "./UserService";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        sorter: true,
        render: (name) => `${name.first} ${name.last}`,
        width: "20%"
    },
    {
        title: "Gender",
        dataIndex: "gender",
        filters: [
            { text: "Male", value: "male" },
            { text: "Female", value: "female" }
        ],
        width: "20%"
    },
    {
        title: "Email",
        dataIndex: "email"
    }
];

class PersonList extends React.Component {
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 10
        },
        loading: false
    };

    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters
        });
    };

    fetch = async (params = {}) => {
        this.setState({ loading: true });

        const data = await UserService.fetchUsers(params);

        this.setState({
            loading: false,
            data: data && data.results,
            pagination: {
                ...params.pagination,
                total: 200 // Mock data
            }
        });
    };

    render() {
        const { data, pagination, loading } = this.state;
        return (
            <Table
                columns={columns}
                rowKey={(record) => record.login.uuid}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={this.handleTableChange}
            />
        );
    }
}

export default PersonList;
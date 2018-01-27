import React, { Component } from 'react';
import { actions } from "mirrorx";
import { Table, Button, Col, Row, Icon } from 'tinper-bee';
import BaseModal from "./BaseModal";

import "./index.less";

const columns = [
    {
        title: "用户名",
        dataIndex: "username",
        key: "username",
        width: 100
    }, {
        id: "123",
        title: "性别",
        dataIndex: "sex",
        key: "sex",
        width: 100
    }, {
        title: "年龄",
        dataIndex: "age",
        key: "age",
        width: 200
    }, {
        title: "操作",
        dataIndex: "id",
        key: "id",
        render(text, record, index) {
            return (
                <a
                    href="javascript:;"
                    onClick={() => {
                        alert('这是第' + index + '列，内容为:' + text);
                    }}>
                    一些操作
                </a>
            );
        }
    }
];

const User = (props) => (
    <div className="user">
    <BaseModal title={"添加"} showModal={props.showModal} onClose = {actions.user.closeModal}/>
        <Row>
            <Col md={12}>
                <div className="user-btn-wrap">
                    <Button onClick={() => actions.user.load()} shape="border" colors="success">加载</Button>
                </div>
                <div className="user-btn-wrap">
                    <Button onClick={() => actions.user.clear()} shape="border" colors="danger">清除</Button>
                </div>
                <div className="user-btn-wrap">
                    <Button onClick={() => actions.user.openModal()} shape="border" colors="info">添加</Button>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
                <Table bordered
                    rowKey={"id"} 
                    columns={columns} 
                    data={props.list} 
                    emptyText={() => <span><Icon className="user-table-empty-icon" type="uf-exc-c"></Icon></span>} 
                />
            </Col>
        </Row>
    </div>
);





export default User;

import React from 'react';
import { Modal, Button, Row, Col, Form, FormControl, Select } from "tinper-bee";
import mirror, { actions, connect } from "mirrorx";
import "./BaseModal.less";

const Option = Select.Option;

mirror.model({
    name: "basemodal",
    initialState: {
        username: "",
        sex: "",
        age: ""
    },
    reducers: {
        save(state, data) {
            return {
                ...state,
                ...data
            }
        }

    },
    effects: {
        changeField(obj, getState) {
            // let state = getState();
            // state[obj.type] = obj.value;
            // console.log(state);
            actions.basemodal.save({ [obj.type]: obj.value });
        }
    }
});

const onChange = function (type, value) {
    actions.basemodal.changeField({
        type,
        value
    })
}

const onClose = (props) => {
    if(props.onClose){
        props.onClose();
    }
}



const BaseModal = (props) => (
    <div>
        <Modal
            dialogClassName="base-modal"
            show={props.showModal}
            onHide={onClose.bind(this,props)}
        >
            <Modal.Header closeButton>
                <Modal.Title > {props.title} </Modal.Title>
            </Modal.Header >
            <Modal.Body >
                <Row>
                    <Col md={3}><span className="base-modal-form-lab">姓名：</span> </Col>
                    <Col md={9}>
                        <FormControl onChange={onChange.bind(this, "username")} value={props.username} />
                    </Col>
                </Row>
                <Row>
                    <Col md={3}><span className="base-modal-form-lab">性别：</span> </Col>
                    <Col md={9}>
                        <FormControl onChange={onChange.bind(this, "sex")} value={props.sex} />
                    </Col>
                </Row>
                <Row>
                    <Col md={3}><span className="base-modal-form-lab">年龄：</span> </Col>
                    <Col md={9}>
                        <FormControl onChange={onChange.bind(this, "age")} value={props.age} />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button style={{ "marginRight": "10px" }} colors="success" onClick={onClose.bind(this,props)} > 保存 </Button>
                <Button style={{ "marginRight": "10px" }} colors="danger" onClick={onClose.bind(this,props)} > 关闭 </Button>
            </Modal.Footer>
        </Modal>
    </div>
);

export default connect(state => state.basemodal)(BaseModal);

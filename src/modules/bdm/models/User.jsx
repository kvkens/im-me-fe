import {actions} from 'mirrorx';
import {Notification} from "tinper-bee";
import * as api from "../services/User";

const notification = Notification.newInstance({position: 'bottomRight'});
export default {
    name : "user",
    initialState : {
        list: [],
        user : {
            username : "",
            sex : "",
            age : ""
        },
        showModal : false
    },
    reducers : {
        save(state, data) {
            return {
                ...state,
                ...data
            }
        }
    },
    effects : {
        async load() {
            console.log("开始请求真实数据");
            let { data : { data : list ,success } } = await api.getUser();
            if (success) {
                notification.notice({
                    content: <span>数据加载成功！</span>,
                    color:"success"
                });
                actions.user.save({list});
            }else{
                notification.notice({
                    content: <span>后台数据有问题！</span>,
                    color:"light"
                });
            }
            
        },
        async clear(){
            actions.user.save({list:[]});
            notification.notice({
                content: <span>数据清除成功！</span>,
                color:"light"
            });
        },
        openModal(){
            actions.user.save({ showModal : true });
        },
        closeModal(){
            actions.user.save({ showModal : false });
        }
    }
}
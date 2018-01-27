import ReactDOM from 'react-dom';
import ToastModal from 'components/ToastModal';
/**
 * 工具类实现
 */

/*
 * @method toast提示框
 * @param 
 *     toast           {object}, 所含属性如下     
 *          size:      string, 默认mds(尺寸528*32), 还可传sms(236*32), lgs(528*93), 对应设计图的三种尺寸
 *          color:     string, 默认success, 还可传 danger, warning, info, 对应设计图的四种颜色, 四个icon也会根据color值自动带过来
 *          content：  string/number, 默认为'成功了,哈哈哈...', toast显示的提示文字
 *          title:     string/number, 默认为'成功了', 只在size= 'lgs'生效, toast的title
 *          isRemind:  bool, 默认为false, 是否显示 '不在提醒' 关闭按钮, size= 'sms'时默认不显示关闭按钮
 *          duration:  number, 默认3, toast弹框默认显示时间3s, 不用传, 后期由需求统一定
 * @return   {toast组件} 
 * @demo     toast({size: 'lgs', color: 'info', content: 'just a test', title: 'test'})
 */
export const toast = (props) => {
  props= props || {};
  if (props.size && props.size!== 'mds') {
      props.isRemind= false;
  }
  let { isRemind, size }= props;
  size= size || 'mds';
  let isShow= isRemind ? document.getElementsByClassName(`toast-zijinyun-project-${size}`)[0] : document.getElementsByClassName('toast-zijinyun-project')[0];
  //阻止连续多次点击时页面出现多个toast弹框
  if(isShow) {
      return false;
  }
  let div = document.createElement('div');
  div.className= 'toast-zijinyun-project';
  //为不在提醒设置独立class
  if (isRemind) {
      div.className= `toast-zijinyun-project-${size}`;
  }
  document.getElementById('app').appendChild(div);
  const toasts = ReactDOM.render(<ToastModal {...props} />, div);
  return toasts;
};

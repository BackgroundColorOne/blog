// 用户扩展引入第三方组件
// npm i --save ant-design-vue 通过yarn add 无法找到该依赖，官网执行npm i
import antd from 'antd-design-vue'
export default ({Vue}) => {
    Vue.use(antd)
}
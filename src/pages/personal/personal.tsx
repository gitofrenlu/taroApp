import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import {  } from '@tarojs/components'
import './personal.scss'

type PageStateProps = {
}
type PageDispatchProps = {
}
type PageOwnProps = {}
type PageState = {}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps
interface Personal {
  props: IProps;
}




class Personal extends Component {
 config: Config = {
   navigationBarTitleText: '我的'
 }
 componentWillReceiveProps(nextProps) {
 console.log(this.props, nextProps)
}
 componentWillUnmount(){
}
 componentDidShow(){ }

 componentDidHide () { }

 render () {
    return (
      <div>
         hello
      </div>
   )
 }
}

export default Personal as ComponentClass<PageOwnProps, PageState>
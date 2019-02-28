import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View,Image,Text,Button} from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './personal.scss'

type PageStateProps = {
  name:String,
  summary;String
}
type PageDispatchProps = {
}
type PageOwnProps = {}
type PageState = {
}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps
interface Personal {
  props: IProps;
}

@connect(({
  name = '璐璐',
  summary = '凡事都有偶然的凑巧，结果却又如宿命的必然'
}) => ({name,summary}))

class Personal extends Component {

  constructor(props){
    super(props)
  }

 config: Config = {
   navigationBarTitleText: '我的信息'
 }
 componentWillReceiveProps(nextProps) {
 console.log(this.props, nextProps)
}
 componentWillUnmount(){
   console.log(Taro.getSetting())
}
 componentDidShow(){ 
   //授权用户功能
  //  Taro.getSetting().then(settings => {
  //    console.log(settings)
  //    Taro.openSetting({
  //     success(res) {
  //       console.log(res.authSetting)
  //       // res.authSetting = {
  //       //   "scope.userInfo": true,
  //       //   "scope.userLocation": true
  //       // }
  //     }
  //   })
  //  })
  }
  change(){
      this.setState({
        name : '12233'
      })
  }

 componentDidHide () { }
 render () {
    return (
      <View className='personal_page'>
        <View>
         <Image
            className='header_img'
            src='/static/image/default.jpg'
          />
          <View>
            <Text>{this.props.name}</Text>
            <Text>{this.props.summary}</Text>
          </View>
          <Button onClick={this.change}>click</Button>
        </View>

      </View>
   )
 }
}

export default Personal as ComponentClass<PageOwnProps, PageState>
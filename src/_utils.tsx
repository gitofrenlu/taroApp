// 工具类
import Taro from '@tarojs/taro'

// 获取跳转连接
export function redirectPage(url = '',params = {}){

  url = url.replace('?','').trim()
  let paramUrl = '?'

  for(const p in params){
      paramUrl += `${p}=${params[p]}`
      paramUrl += '&'
  }

  url = `${url}${paramUrl.substr(0,paramUrl.length-1)}`

  Taro.redirectTo({ url:url})

}
//转tab
export function switchTab(url = ''){

  Taro.switchTab({url:url})  

}
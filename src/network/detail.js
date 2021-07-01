import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid: iid
    }
  })
}
// 因为某个对象里面有很多属性，所以需要整合成一个类，如果就一个属性，就不需要这样搞，直接用就可以了
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
export class Shop{
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cFans = shopInfo.cFans
    this.cSells = shopInfo.cSells
    this.score = shopInfo.score
    this.cGoods = shopInfo.cGoods
  }
}
export class Param {
  constructor(info, rule) {
    this.info = info.set;
    this.rule = rule.tables;
  }
}
export function getRecommend(){
  return request({
    url:'/recommend'
  })
}

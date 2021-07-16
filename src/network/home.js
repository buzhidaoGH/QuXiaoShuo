import {request} from './request';

//请求基本首页数据
export function getHomeMultidata(){
  return request({
    url:'/'
  });
}
//请求基本首页随机推荐
export function getRandomMultidata(){
  return request({
    url:'/randomnovel'
  });
}

//有参数的传入
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  });
}
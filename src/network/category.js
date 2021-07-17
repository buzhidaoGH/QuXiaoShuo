import { request } from './request'

//请求分类的数量
export function getCategoryNumber() {
  return request({
    url: '/xiaoshuocategory/',
  })
}

//请求每个分类的小说详情
export function getCategoryInfo(id,page) {
  let categroy = '';
  if (id==1) categroy = 'xuanhuan/'
  if (id==2) categroy = 'xiuzhen/'
  if (id==3) categroy = 'dushi/'
  if (id==4) categroy = 'chuanyue/'
  if (id==5) categroy = 'wangyou/'
  if (id==6) categroy = 'kehuan/'
  if (id==7) categroy = 'qita/'
  return request({
    url: '/xiaoshuo/'+categroy+page,
  })
}
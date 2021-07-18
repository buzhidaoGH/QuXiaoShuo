import { request } from './request'

//搜索匹配的标题()
export function getSearchTips(title) {
  if (title != '') {
    return request({
      url: '/searchTips',
      params: {
        title: title,
      },
    })
  }
}

export function getSearchNovel(title) {
  return request({
    url: '/search',
    params: {
      title: title,
    },
  })
}

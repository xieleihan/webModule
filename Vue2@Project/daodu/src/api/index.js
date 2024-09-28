// 导入axios实例
import http from './request';

// 接口1: 最新日报列表
export const latest = (data = {}) => {
    return http.get('/stories/latest', { params: data })
}

// 接口2: 历史日报列表
export const before = (data = {}) => {
    // console.log('/stories/before/'+ data)
    return http.get('/stories/before/'+data)
}

// 接口3: 日报内容
export const detail = (data = {})=> {
    return http.get('/story/'+data)
}
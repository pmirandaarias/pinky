import {get, post} from "../../requests"

export const getAllCategories = async () => {
    return await get('category/list/all')
}

export const getAllProducts = async () => {
    return await get('product/list/all?limit=100&long=120.9890886&lat=14.6038894')
}

export const searchProducts = async (query) => {
    return await get(`product/list/search?search=${query}&long=120.9890886&lat=14.6038894`)
}

export const getProductsByCategory = async (long, lat, skip, limit, filters = {}) =>  {
    // const data = { long, lat, skip, limit, filters }
    // console.log(data)
    // return await post({long, lat, skip, limit, filters}, `product/list/by-search`)
    return await post({long, lat, skip, limit, filters}, `product/list/by-search`)
}
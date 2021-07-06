import {get} from "../../requests"



export const getAllShops = async (limit, long, lat) => {
    return await get('shop/list/allv2?limit=100&long=120.9890886&lat=14.6038894')
}
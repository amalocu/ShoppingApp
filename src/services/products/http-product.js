import {API_BASE, HTTP_PRODUCT} from '../base/config.js';
import HttpBase from '../base/http-base';

class HttpProduct{
    async getProducts(){
        try {
            const url = `${API_BASE}${HTTP_PRODUCT.getProducts}`;
            const data = await HttpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log("error==>")
            console.log(error);
        }
    }

    async getProduct(_id){
        try {
            const url = `${API_BASE}${HTTP_PRODUCT.getProducts}/${_id}`;
            let TOKEN = 'dftg3Wd6sW2zxl6dewWfS1';
            const config = {
                headers:{
                }
            }
            const data = await HttpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log("error==>")
            console.log(error);
        }
    }
}

export default new HttpProduct;
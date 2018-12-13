import {API_BASE, HTTP_USER} from '../base/config.js';
import HttpBase from '../base/http-base';

class HttpUser{
    async getUsers(){
        try {
            const url = `${API_BASE}${HTTP_USER.getUsers}`;
            const data = await HttpBase.baseGet(url, {});
            return data;
        } catch (error) {
            console.log("error==>")
            console.log(error);
        }
    }

    async getUserByToken(){
        try {
            const url = `${API_BASE}${HTTP_USER.getUser}`;
            let TOKEN = 'dftg3Wd6sW2zxl6dewWfS1';
            const config = {
                headers:{
                    Authorization: `Bearer: ${TOKEN}`
                }
            }
            const data = await HttpBase.baseGet(url, config);
            return data;
        } catch (error) {
            console.log("error==>")
            console.log(error);
        }
    }

    async login(user){
        try {
            const param =  HttpBase.getStringParameters({'email': user.name,'password': user.password});
            const url = `${API_BASE}${HTTP_USER.login}?${param}`;
            const config = {
                headers:{}
            }
            const data = await HttpBase.baseGet(url, config);
            return data;
        } catch (error) {
            console.log("error==>")
            console.log(error);
        }
    }
}

export default new HttpUser;
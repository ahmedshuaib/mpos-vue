import axios from 'axios'
import User from "@/modules/User";


export default {

    register: async form =>{
        console.log('gfbdjsd');
        const res = (await axios.post('http://127.0.0.1:8000/api/user-manage/register',form)).data;
        console.log('dd', res);
    },

    login: async form => {
        const token = (await axios.post('http://127.0.0.1:8000/api/user-manage/login', form)).data.token;
        localStorage.setItem('auth_token', token)
        axios.defaults.headers.common['Authorization'] = 'Bearer '+ token;
    },
    logout: () => {
        axios.post('http://127.0.0.1:8000/api/user-manage/logout');
    },
    getAuthUser: async () =>  {
        const res = (await axios.get('http://127.0.0.1:8000/api/user-manage/auth/users')).data;
        console.log('dd', res);
        return new User({
            id: res?.id,
            first_name: res?.first_name,
            last_name: res?.last_name,
            email: res?.email,
        });
    },

}

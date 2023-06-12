import axios from 'axios';

class AuthServices{
    userModal(user){
        const reponse=axios.post('http://localhost:8080/user/usermodal',user)
        console.log(reponse.data);
    }
}
export default new AuthServices;
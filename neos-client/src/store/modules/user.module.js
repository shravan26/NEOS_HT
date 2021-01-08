import axios from 'axios';


export default {
    state : {},
    getters : {},
    mutations : {},
    actions : {
      REGISTER_USER: ({commit},payload) => {
          console.log(commit);
          return new Promise((resolve, reject) =>{
            axios.post('/signup',payload)
            .then(({data,status}) => {
                if(status === 200) {
                    console.log(data);
                    resolve(true);
                }
            })
            .catch(err => reject(err));
          })
      },
      LOGIN: ({commit},payload) => {
        console.log(commit);
        return new Promise((resolve, reject) =>{
          axios.post('/login',payload)
          .then(({data,status}) => {
            if(status === 200) {
              console.log(data);
              resolve(true);
            }
          })
          .catch(err => reject(err));
        })
      }  
    },
}
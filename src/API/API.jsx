import axios from "axios";


 
 const API = {
  getUser: async () => {
   const result = await axios.get(`https://api.github.com/users/${`qodirolimov`}`);
   return result.data;
  },

  getRepos: async () => {
   const result =await axios.get(`https://api.github.com/users/${`qodirolimov`}/repos`);
   return result;
  },

  getFollowing: async ()=> {
   const result = await axios.get(`https://api.github.com/users/${`qodirolimov`}/following`);
   return result;
  }
   
}


export default API;


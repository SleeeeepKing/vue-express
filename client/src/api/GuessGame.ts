import axios from "axios";
import qs from "qs";


 export function test(){
     axios.post('/api/getStudents', qs.stringify({
         type: 'less',
         score: 99
     })).then(res => {
         console.log(res);
     }).catch(err=>{
         console.log(err)
     })
 }

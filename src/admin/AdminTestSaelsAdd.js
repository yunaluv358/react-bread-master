import React, {useState} from 'react';
import axios from 'axios'
const AdminTestSaelsAdd = () => {
    const [sales,setSales] = useState(1)
    const Click = e => {
        axios.get(`http://localhost:8080/user/sales/${sales}`)
            .then((res)=>{
                alert("성공")
            })
            .catch(err =>{
                alert("실패")
            })
    }

    return (
        <div>
            <input type="button" onClick={Click} value={"버튼"}/>
        </div>
    );
};

export default AdminTestSaelsAdd;
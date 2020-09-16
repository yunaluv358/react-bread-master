import React, {useEffect, useState} from 'react';
import axios from 'axios'

export const Breads = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8080/bread/findAll`)
            .then((response) => {
                    setData(response.data)
                }
            ).catch((error => {
                throw (error)
            }
        ))
    },[])

    return (
        <>
            <td>상품목록</td>

            <tbody>
            {data.map((i, index) => (
                <tr key={index}>
                    <td>테스트</td>
                    <td>{i.breadName}</td>
                    <td><img src={i.breadImage} /></td>
                    <td>{i.breadPrice}</td>
                    <td>{i.breadDescription}</td>
                </tr>
            ))}

            </tbody>
        </>
    );
};

import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import axios from "axios";
import {PageTemplate} from "../common/PageTemplate";
const UserShipping = () => {
    const [data,setData] = useState([])
    const [user,setUser] = useState(JSON.parse(sessionStorage.getItem('user')))

    useEffect(()=>{
        const shippingName = user.name
        axios.get(`http://localhost:8080/shipping/${shippingName}`)
            .then((res)=>{
                alert("성공")
                setData(res.data)
                console.log("데이터"+res.data)
            })
            .catch(() =>{
                alert("실패")
            })
    },[])
    // const columns = [
    //     {
    //         title:'상품명',field:'shippingBreadName'
    //     },
    //     {
    //         title:'배송시작날짜',field:'shippingDate'
    //     },
    //     {
    //         title:'배송자명',field: 'shippingName'
    //     },
    //     {
    //         title:'배송상태',field: 'shippingStatus'
    //     }
    // ]
    // const editable = {
    //     onRowUpdate: (newData,oldData) =>
    //         new Promise((resolve,reject)=>{
    //             setTimeout(()=>{
    //                 const dataUpdate = [...data]
    //                 const index = oldData.tableData.id;
    //                 dataUpdate[index] = newData
    //                 setData([...dataUpdate])
    //                 resolve(
    //                     axios.post(`http://localhost:8080/shipping/allUpdate`,[...dataUpdate])
    //                         .then((res)=>{
    //                         })
    //                         .catch(()=>{
    //                             alert("통신실패")
    //                         })
    //                 )
    //             })
    //         })
    // }
    return (
        <>
            <PageTemplate>
                <br/>
                <br/>
                <div>{data.shippingName}</div>
                <div>{data.shippingStatus}</div>
                <div>{data.shippingBreadName}</div>
                <div>{data.shippingPrice}</div>
                <div>{data.shippingAddr}</div>
                <div>{data.shippingAddr}</div>
            {/*<MaterialTable*/}
            {/*    title={"배송"}*/}
            {/*    data={data}*/}
            {/*    columns={columns}*/}
            {/*    style={{top:'20%'}}*/}
            {/*    editable={editable} options={{*/}
            {/*    headerStyle: {*/}
            {/*        backgroundColor: '#01579b',*/}
            {/*        color: '#FFF'*/}
            {/*    },*/}
            {/*    rowStyle: {*/}
            {/*        // backgroundColor: '#EEE',*/}
            {/*    }*/}
            {/*}}/>*/}
            </PageTemplate>
        </>

    );
};

export default UserShipping;
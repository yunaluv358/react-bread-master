import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import axios from "axios";
import {PageTemplate} from "../common/PageTemplate";
const UserShipping = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8080/shipping/findAll`)
            .then((res)=>{
                setData(res.data)
            })
            .catch(() =>{

            })
    },[])
    const columns = [
        {
            title:'상품명',field:'shippingBreadName'
        },
        {
            title:'배송시작날짜',field:'shippingDate'
        },
        {
            title:'배송자명',field: 'shippingName'
        },
        {
            title:'배송상태',field: 'shippingStatus'
        }
    ]
    const editable = {
        onRowUpdate: (newData,oldData) =>
            new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const dataUpdate = [...data]
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData
                    setData([...dataUpdate])
                    resolve(
                        axios.post(`http://localhost:8080/shipping/allUpdate`,[...dataUpdate])
                            .then((res)=>{
                            })
                            .catch(()=>{
                                alert("통신실패")
                            })
                    )
                })
            })
    }
    return (
        <>
            <PageTemplate>
                <br/>
                <br/>
            <MaterialTable
                title={"배송"}
                data={data}
                columns={columns}
                style={{top:'20%'}}
                editable={editable} options={{
                headerStyle: {
                    backgroundColor: '#01579b',
                    color: '#FFF'
                },
                rowStyle: {
                    // backgroundColor: '#EEE',
                }
            }}/>
            </PageTemplate>
        </>

    );
};

export default UserShipping;
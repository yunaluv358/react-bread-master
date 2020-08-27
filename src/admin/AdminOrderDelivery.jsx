import React, {useEffect, useState} from 'react';
import axios from 'axios'
import MaterialTable from "material-table";

const OrderDeliveryTypes = {REQUEST: 'Chart/REQUEST'}
const OrderDeliveryRequest = action => ({type: OrderDeliveryTypes.REQUEST, payload: action.payload})
const OrderDeliveryReducer = ( state, action ) => {
    switch (action.type) {
        case OrderDeliveryTypes.REQUEST: return {...state, payload: action.payload}
        default: return state
    }
}


export const AdminOrderDelivery = () => {
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
            <table title="배송 진행 목록" parent="Users" />
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body sell-graph">
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="clearfix"/>
                        <div id="batchDelete" className="category-table user-list order-table coupon-list-delete">
                            <MaterialTable
                                title={"배송"}
                                data={data}
                                columns={columns}
                                editable={editable} options={{
                                headerStyle: {
                                    backgroundColor: '#01579b',
                                    color: '#FFF'
                                },
                                rowStyle: {
                                    // backgroundColor: '#EEE',
                                }
                            }}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};




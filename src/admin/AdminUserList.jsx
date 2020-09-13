import React, {useEffect, useState} from 'react';
import {Button} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from "axios";
import MaterialTable from "material-table";

export const AdminUserList = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/user/findAll`)
        .then((res)=>{
          setData(res.data)
        })
        .catch(()=>{
        })
  },[])
  const columns = [
    {
      title:'이름',field:'name'
    },
    {
      title:'아이디',field:'userId'
    },
    {
      title:'비밀번호',field:'password'
    },
    {
      title:'휴대전화',field:'phone'
    },
    {
      title:'이메일',field:'email'
    },
    {
      title:'주소',field:'addr'
    },
    {
      title:'상세주소',field:'detailAddr'
    },
  ]
  const editable = {
    onRowUpdate: (newData,oldData) =>
        new Promise((resolve,reject) =>{
          setTimeout(()=>{
            const dataUpdate = [...data]
            const index = oldData.tableData.id;
            dataUpdate[index] = newData
            setData([...dataUpdate])
            resolve()
            axios.post(`http://localhost:8080/user/allUpdate`, [...dataUpdate])
                .then((res) => {
                })
                .catch(() => {
                  alert("통신실패")
                })
          })
        })
  }
  return (
      <>
          <Button
              color="primary"
              size="small"
              variant="text"
              href="/user-list"
          >
              전체보기<ArrowRightIcon/>
          </Button>
        <table title="회원 리스트" parent="Users" />
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
                    title={"회원관리"}
                    data={data}
                    columns={columns}
                    editable={editable}
                    options={{
                        headerStyle: {
                            backgroundColor: '#01579b',
                            color: '#FFF',
                            fontSize : '18px'
                        }
                    }}/>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default AdminUserList


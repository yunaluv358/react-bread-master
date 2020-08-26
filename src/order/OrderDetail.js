import React from "react";
import styled from "styled-components";
import Pagination from "../vendor-test/common/pagination";
const OrderDetailTypes= {REQUEST: 'OrderDetail/REQUEST', SUCCESS: 'OrderDetail/SUCCESS', FAIL: 'OrderDetail/FAIL'}
const OrderDetailRequest = action => ({types: OrderDetailTypes.REQUEST, payload: action.payload})
const OrderDetailSuccess = action => ({types: OrderDetailTypes.SUCCESS, payload: action.payload})
const OrderDetailFail = action => ({types: OrderDetailTypes.FAIL, payload: action.payload})

export const OrderDetailReducer = (state, action) => {
	switch (action.type) {
		case OrderDetailTypes.REQUEST:
			return {
				...state, payload: action.payload
			}
		case OrderDetailTypes.SUCCESS:
			return {
				...state, payload: action.payload
			}
		case OrderDetailTypes.FAIL:
			return {
				...state, payload: action.payload
			}
		default:
			return state
	}
}
const BuyListTable = styled.table`
    width: 100%; 
    tbody {
        text-align: center; 
        tr {
            border-bottom: 1px solid #ccc;
            td {
                padding: 10px;
            }
        }
    }
`;
const PageDiv = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    div {
        min-height: 0 !important;
        box-shadow: none !important;
        a{
            padding: 5px 7px !important;
            min-width: 0 !important;
        }
    }
`;
export const OrderDetail = () => {
	return <>
		<center>
					<thead>
					<table border="1">
						<th>상품사진</th>
						<th>상품명</th>
						<th>구매날짜</th>
						<th>주문상태</th>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					</table>
					</thead>
		</center>
	</>
}
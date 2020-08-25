import React, {useEffect, useState} from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from "react-bootstrap/Modal";
// var Modal = require('react-bootstrap-modal')
const UserPostcode = ({setAddress}) => {
    console.log("포스트코드받은값" + setAddress)
    const [show,setShow] = useState(false)

    const handleClosed = () =>{
        setShow(false)
    }
    const handleAddr = (e) => {
        e.preventDefault()
        setShow(true)
    }


    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        setAddress(fullAddress)
        setShow(false)
        console.log("풀어드레스값?"+fullAddress);
    }

    return (
        <>
            <button type="submit" onClick={handleAddr} className="btn btn-solid">주소찾기</button>
            <Modal  animation={false} show={show} onHide={handleClosed}>
                <Modal.Header closeButton>
                    <Modal.Title>주소검색</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DaumPostcode onComplete={handleComplete}/>
                </Modal.Body>
            </Modal>

        </>
    );
}
export default UserPostcode
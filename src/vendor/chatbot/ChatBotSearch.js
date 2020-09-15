import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(()=>({
    size:{
        width : "20%",
        height : "30%"
    }
}))

export const ChatBotSearch = (props) => {
    const [breadName, setBreadName] = useState('')
    const [data, setData] = useState([])
    const classes = useStyle()
    const passDetail = bread => {
        alert('소비자 선택 후 ...'+bread.breadName)
        localStorage.setItem('selectedBread', JSON.stringify(bread))
    }
    useEffect(()=>{
        const { steps } = props;
        setBreadName(steps.breadSearch.value)
        axios.get(`http://localhost:8080/bread/breadSearch/${breadName}`)
            .then( response => {
                alert('성공')
                setData(response.data)
            } )
            .catch( response => {
                alert('실패')
            } );
    },[breadName])

    return ((data.length !== 0)?
            <div>
                {data.map((i, index) =>{
                    return(
                        <div key={index}>
                            <h3>{i.breadName}</h3>
                            <a href="breadItem" onClick={()=>passDetail(i)}>
                                <img src={i.breadImage} className={classes.size}/>
                            </a>
                            <h4>가격: {i.breadPrice}</h4>
                        </div>
                    )
                })}
            </div>: <a href={'/bot'}>정보가 없습니다. 누르면 처음화면으로 이동합니다</a>

    )
}

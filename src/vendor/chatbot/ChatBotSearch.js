import React, {useEffect, useState} from "react";
import axios from "axios";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(()=>({
    size:{
        width: 'auto',
        height: 'auto',
        maxWidth: '100px',
        maxHeight: '100px'
    }
}))

export const ChatBotSearch = (props) => {
    const [breadName, setBreadName] = useState('')
    const [data, setData] = useState([])
    const classes = useStyle()
    const passDetail = bread => {
        localStorage.setItem('selectedBread', JSON.stringify(bread))
    }
    useEffect(()=>{
        const { steps } = props;
        setBreadName(steps.breadSearch.value)
        axios.get(`http://localhost:8080/bread/breadSearch/${breadName}`)
            .then( response => {
                setData(response.data)
            } )
            .catch( response => {
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

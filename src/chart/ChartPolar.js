import React, {useState} from "react";
import {Doughnut, Polar} from 'react-chartjs-2'
import axios from "axios";


const ChartPolar = props => {
    const [totalKey,setTotalKey] = useState([]);
    const [totalValue,setTotalValue] =useState( parseInt([]));
    const [name,setName] = useState('')
    function enterKey (){
        if (window.event.keyCode == 13) {
            TODO:chartHandle()
        }
    }
    const chartHandle = e => {
        axios
            .get(`http://localhost:8080/user/data/${name}`)
            .then((res)=>{
                alert("성공" + res.data)
                const keyContainer =[];
                const valueContainer  = [];
                console.log(res.data)
                Object.entries(res.data).forEach(([key,value])=>{
                    console.log("밸류값"+value)
                    keyContainer.push(key)
                    valueContainer.push(value)
                })
                setTotalKey(keyContainer);
                setTotalValue(valueContainer);
            })
            .catch((err)=>{
                alert("실패")
                throw err;
            })
    }
    console.log(totalValue)
    const chartData = {
        labels: totalKey,
        datasets: [
            {
                label:'주문수',
                data: totalValue,
                backgroundColor: 'rgba(120,29,29,0.3)',
                borderWidth: 4,
                LineTension: 0,
                xPadding:20,
                yPadding:20,
            }
        ]
    }


    const {chartValue} = props
    const [dataType, setDataType] = useState(chartData)
    // const switchCase = (param) =>{
    //     switch(param){
    //         case "Sales": return setDataType(chartData)
    //     }
    // }
    // switchCase(chartValue)
    return (
        <div>
            <h2>{chartValue}</h2>
            <input type="text" onChange={e => setName(e.target.value)}/>
            <input type="button" onkeyup={enterKey} onClick={chartHandle} value={"회원조회"}/>
            <Polar
                data={chartData}
            />
        </div>
    );
}
export default ChartPolar
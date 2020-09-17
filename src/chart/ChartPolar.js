import React, {useState} from "react";
import {Bar, Doughnut, Polar} from 'react-chartjs-2'
import axios from "axios";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles(()=>({
    searchSize : {
        width : '20%',

    }
}))

const ChartPolar = props => {
    const [totalKey,setTotalKey] = useState([]);
    const [totalValue,setTotalValue] =useState( parseInt([]));
    const [name,setName] = useState('')
    const classes = useStyle()
    function enterKey (){
        if (window.event.keyCode == 13) {
            TODO:chartHandle()
        }
    }
    const chartHandle = e => {
        axios
            .get(`http://localhost:8080/user/data/${name}`)
            .then((res)=>{
                const keyContainer =[];
                const valueContainer  = [];
                Object.entries(res.data).forEach(([key,value])=>{
                    keyContainer.push(key)
                    valueContainer.push(value)
                })
                setTotalKey(keyContainer);
                setTotalValue(valueContainer);
            })
            .catch((err)=>{
                throw err;
            })
    }
    const chartData = {
        labels: totalKey,
        datasets: [
            {
                labels:['1월','2월','3월','4월','5월','6월','7월','8월'],
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
    return (
        <div>
            <h2>{chartValue}</h2>
            <input type="text" className={classes.searchSize} onChange={e => setName(e.target.value)} autoFocus={true}/>
            <input type="button" onkeyup={enterKey} onClick={chartHandle} value={"회원조회"}/>
            <Polar
                data={chartData}
                width={40}
                height={17}
            />
        </div>
    );
}
export default ChartPolar
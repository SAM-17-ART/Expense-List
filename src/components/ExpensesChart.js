import React from 'react';
import Chart from'./Chart/Chart';
const ExpensesChart=(props)=>{
    const chartDataPoints=[
        { id:'e1',label:'Jan',value:0 },
        { id:'e2',label:'Feb',value:0},
        {id:'e3',label:'Mar',value:0},
        {id:'e4',label:'Apr',value:0},
        {id:'e5',label:'May',value:0},
        {id:'e6',label:'Jun',value:0},
        {id:'e7',label:'Jul',value:0},
        {id:'e8',label:'Aug',value:0},
        {id:'e9',label:'Sep',value:0},
        {id:'e10',label:'Oct',value:0},
        {id:'e11',label:'Nov',value:0},
        {id:'e12',label:'Dec',value:0},
    ];
    for(const expense of props.expenses)
    {
        const expenseMonth=expense.date.getMonth();
        chartDataPoints[expenseMonth].value+=expense.amount;
    }
    return(
        <Chart dataPoints={chartDataPoints}></Chart>
    );

}
export default ExpensesChart;
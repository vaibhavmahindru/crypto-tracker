import React from 'react'
import Chart from 'react-apexcharts'
import Avatar from '@material-ui/core/Avatar';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './coins.css'
const Coins = ({
    key,
    symbol,
    name,
    currPrice,
    cp1h,
    cp24h,
    cp7d,
    image,
    sparkLine}) => {
    return(
        <TableRow key={key}>
            <TableCell component="th" scope="row">
                <Avatar alt="logo" src={image} />
            </TableCell>
            <TableCell align="right"><p>{name}</p></TableCell>
            <TableCell align="right"><p>{symbol}</p></TableCell>
            <TableCell align="right"><p>₹{currPrice}</p></TableCell>
            <TableCell align="right">
                {cp1h < 0 ? (<p className='coin-percent red'>{cp1h.toFixed(2)}%</p>) : (<p className='coin-percent green'>{cp1h.toFixed(2)}%</p>)}
            </TableCell>
            <TableCell align="right">
                {cp24h < 0 ? (<p className='coin-percent red'>{cp24h.toFixed(2)}%</p>) : (<p className='coin-percent green'>{cp24h.toFixed(2)}%</p>)}
            </TableCell>
            <TableCell align="right">
                {cp7d < 0 ? (<p className='coin-percent red'>{cp7d.toFixed(2)}%</p>) : (<p className='coin-percent green'>{cp7d.toFixed(2)}%</p>)}
            </TableCell>
        </TableRow>
    )
}

export default Coins


    // const options = {chart: {id: 'sparkline chart'},stroke: { curve: 'straight' }, yaxis: {labels: {show: false} }, xaxis:  {labels: {show: false} }}
    //     const series = [{name: 'series',data: sparkLine}]
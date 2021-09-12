import React from 'react'
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
    marketCap}) => {
    return(
        <TableRow key={key} className="table-row">
            <TableCell >
                <Avatar alt="logo" src={image} />
            </TableCell>
            <TableCell align="left"><p className="row-text">{name}</p></TableCell>
            <TableCell align="left"><p className="row-text">{symbol}</p></TableCell>
            <TableCell align="center"><p className="row-text">₹{currPrice}</p></TableCell>
            <TableCell align="center">
                {cp1h < 0 ? (<p className='coin-percent red row-text'>{cp1h.toFixed(2)}%</p>) : (<p className='coin-percent green row-text'>{cp1h.toFixed(2)}%</p>)}
            </TableCell>
            <TableCell align="center">
                {cp24h < 0 ? (<p className='coin-percent red row-text'>{cp24h.toFixed(2)}%</p>) : (<p className='coin-percent green row-text'>{cp24h.toFixed(2)}%</p>)}
            </TableCell>
            <TableCell align="center">
                {cp7d < 0 ? (<p className='coin-percent red row-text'>{cp7d.toFixed(2)}%</p>) : (<p className='coin-percent green row-text'>{cp7d.toFixed(2)}%</p>)}
            </TableCell>
            <TableCell align="center"><p className="row-text">₹{marketCap.toLocaleString()}</p></TableCell>
        </TableRow>
    )
}

export default Coins


    // const options = {chart: {id: 'sparkline chart'},stroke: { curve: 'straight' }, yaxis: {labels: {show: false} }, xaxis:  {labels: {show: false} }}
    //     const series = [{name: 'series',data: sparkLine}]
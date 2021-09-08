import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Coins from './Coins';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth:450,
  },
});


function App() {
  const classes = useStyles();
  const [coins,setCoins] = useState([]);
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
    .then(res=>{
      setCoins(res.data)
    })
    .catch(err => console.log(err))
  },[])
  return (
    <div className="App">
      
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><p>LOGO</p></TableCell>
            <TableCell align="right"><p>NAME</p></TableCell>
            <TableCell align="right"><p>SYMBOL</p></TableCell>
            <TableCell align="right"><p>CURR PRICE</p></TableCell>
            <TableCell align="right"><p>1H</p></TableCell>
            <TableCell align="right"><p>24H</p></TableCell>
            <TableCell align="right"><p>7d</p></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
        coins.map(coin => {
          return (
          <Coins
            key={coin.id}
            symbol={coin.symbol}
            name={coin.name}
            currPrice={coin.current_price}
            cp1h={coin.price_change_percentage_1h_in_currency}
            cp24h={coin.price_change_percentage_24h_in_currency}
            cp7d={coin.price_change_percentage_7d_in_currency}
            image={coin.image}
            volme={coin.market_cap}
            sparkLine={coin.sparkline_in_7d.price}
          />
          )
        })
      }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default App;

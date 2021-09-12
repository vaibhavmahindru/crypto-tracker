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
    minWidth:"25%",
    color:"#fff",
    backgroundColor: "#1a1a1c"
  },
});

function App() {
  const classes = useStyles();
  const [coins,setCoins] = useState([]);
  const [search, setSerach] = useState('');
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=30&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d')
    .then(res=>{
      setCoins(res.data)
    })
    .catch(err => console.log(err))
  },[])
  const handleChange=e=>{
    setSerach(e.target.value)
    console.log(search)
  }
  const filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="App">
      <div className='coin-search'>
        <h1 className='coin-text'>Search a currency</h1>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
      </div>
      <div className="coin-app">
        <TableContainer  component={Paper} >
          <Table className={classes.table} aria-label="simple table" >
            <TableHead>
              <TableRow>
                <TableCell ></TableCell>
                <TableCell align="left"><p className="table-heading">COIN</p></TableCell>
                <TableCell align="left"><p className="table-heading"></p></TableCell>
                <TableCell align="center"><p className="table-heading">CURR. PRICE</p></TableCell>
                <TableCell align="center"><p className="table-heading">1H</p></TableCell>
                <TableCell align="center"><p className="table-heading">24H</p></TableCell>
                <TableCell align="center"><p className="table-heading">7d</p></TableCell>
                <TableCell align="center"><p className="table-heading">MKT. VOL.</p></TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="table-body">
              {filteredCoins ?
              filteredCoins.map(coin => {
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
                marketCap={coin.total_volume}
                />
                )
                })
              :
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
                marketCap={coin.total_volume}
                />
                )
                })
              }
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;

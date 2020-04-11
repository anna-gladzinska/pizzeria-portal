import React from 'react';
import styles from './OrderNew.module.scss';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button  from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const demoOrder = [
  {table: '1', product: 'ZIO STEFANOS DOUGHNUT', amount:'1', options:null, price:'9$'},
  {table: '1', product: 'NONNA ALBAS PIZZA', amount:'1', options: ['red peppers', ' salami'], price: '20$'},
];

const OrderNew = () => (
  <Paper className={styles.component}>
    <Typography variant="h6">New order</Typography>
    <form>
      <TextField className={styles.textfield} id="standard-basic" label="Table" required/>
      <Typography variant="h6">Menu:</Typography>
      <hr/>
      <Typography variant="body1"><strong>ZIO STEFANO&apos;S DOUGHNUT</strong><Checkbox id="doughnut"></Checkbox></Typography>
      <hr/>
      <Typography variant="body1"><strong>ZIA GIULIA&apos;S BREAKFAST</strong><Checkbox id="breakfast"></Checkbox></Typography><br/>
      <Typography variant="body1"><strong>Coffee type:</strong></Typography>
      <Typography variant="body1">Latte<Checkbox id="latte"></Checkbox></Typography>
      <Typography variant="body1">Cappuccino<Checkbox id="Cappuccino"></Checkbox></Typography>
      <Typography variant="body1">Espresso<Checkbox id="espresso"></Checkbox></Typography>
      <Typography variant="body1">Macchiato<Checkbox id="macchiato"></Checkbox></Typography>
      <hr/>
      <Typography variant="body1"><strong>NONNA ALBA&apos;S PIZZA</strong><Checkbox id="pizza"></Checkbox></Typography><br/>
      <Typography variant="body1"><strong>Sauce:</strong></Typography>
      <Typography variant="body1">Tomato<Checkbox id="tomato"></Checkbox></Typography>
      <Typography variant="body1">Sour cream<Checkbox id="sour"></Checkbox></Typography><br/>
      <Typography variant="body1"><strong>Toppings:</strong></Typography>
      <Typography variant="body1">Olives<Checkbox id="olives"></Checkbox></Typography>
      <Typography variant="body1">Corn<Checkbox id="corn"></Checkbox></Typography>
      <Typography variant="body1">Red peppers<Checkbox id="redpepers"></Checkbox></Typography>
      <Typography variant="body1">Green peppers<Checkbox id="greenpepers"></Checkbox></Typography>
      <Typography variant="body1">Mushrooms<Checkbox id="mushrooms"></Checkbox></Typography>
      <Typography variant="body1">Pineapple<Checkbox id="pineapple"></Checkbox></Typography>
      <Typography variant="body1">Fresh basil<Checkbox id="basil"></Checkbox></Typography>
      <Typography variant="body1">Salami<Checkbox id="salami"></Checkbox></Typography>
      <Typography variant="body1">Bacon<Checkbox id="bacon"></Checkbox></Typography>
      <hr/>
      <Typography variant="body1"><strong>NONNO ALBERTO&apos;S SALAD</strong><Checkbox id="salad"></Checkbox></Typography><br/>
      <Typography variant="body1"><strong>Ingredients:</strong></Typography>
      <Typography variant="body1">Cucumber<Checkbox id="cucumber"></Checkbox></Typography>
      <Typography variant="body1">Tomatoes<Checkbox id="tomatoes"></Checkbox></Typography>
      <Typography variant="body1">Olives<Checkbox id="olives"></Checkbox></Typography>
      <Typography variant="body1">Feta cheese<Checkbox id="feta"></Checkbox></Typography>
      <Typography variant="body1">Cheese<Checkbox id="cheese"></Checkbox></Typography>
      <Typography variant="body1">Fresh herbs<Checkbox id="herbs"></Checkbox></Typography>
      <Typography variant="body1">Black pepper<Checkbox id="pepper"></Checkbox></Typography>
      <hr/>
      <Button type="submit">Save</Button>
    </form><br/><br/>
    <Typography variant="h6">Order</Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Table</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Options</TableCell>
          <TableCell>Price</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoOrder.map(row => (
          <TableRow key={row.table}>
            <TableCell component="th" scope="row">
              {row.table}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.product}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.amount}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.options}
            </TableCell>
            <TableCell component="th" scope="row">
              {row.price}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Typography className={styles.price} variant="body1"><strong>Total price: 29$</strong></Typography>
  </Paper>
);

export default OrderNew;

import React, { Fragment, useEffect } from "react";
import Itemlist from "./Itemslist/Itemlist";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { getCart } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Logout from "../logout/Logout";
function Cart() {
  const params = useParams();
  const dispatch = useDispatch();
  const { cart, loading } = useSelector((state) => state.cart);
  console.log(cart);
  var total = 0;
  if (loading == false) {
    cart.map((items) => {
      total = total + items.price * items.quantity;
    });
  }
  useEffect(() => {
    dispatch(getCart(params.userID));
  }, [dispatch]);
  return (
    <Fragment>
      {loading ? (
        <p> Loading cart</p>
      ) : (
        <Fragment>
          <Logout />
          <div className="table">
            <TableContainer classes="table" component={Paper}>
              <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{ width: 200 }}>
                      Products
                    </TableCell>
                    <TableCell align="left" style={{ width: 200 }}>
                      Price&nbsp;(g)
                    </TableCell>
                    <TableCell align="left" style={{ width: 200 }}>
                      Quantity&nbsp;(g)
                    </TableCell>
                    {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" style={{ width: 200 }}>
                        {row.name}
                      </TableCell>
                      <TableCell align="left" style={{ width: 200 }}>
                        {row.price}
                      </TableCell>
                      <TableCell align="left" style={{ width: 200 }}>
                        {row.quantity}
                      </TableCell>
                      {/* <TableCell align="right">{row.protein}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="total">
            <p>Total</p>
            <h1>{total}</h1>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Cart;

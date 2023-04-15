import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Logout from "../logout/Logout";
function Header() {
  const params = useParams();
  console.log(params.userID);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2vmin 5vmin",
      }}
    >
      <Logout />
      <Link to={`/${params.userID}/cart`}>
        <Button variant="contained">Cart</Button>
        {/* <button>Cart</button> */}
      </Link>
    </div>
  );
}

export default Header;

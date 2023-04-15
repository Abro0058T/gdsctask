import React from "react";
import { Fragment } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    navigate("/");
  };
  return (
    <Fragment>
      <Button variant="outlined" onClick={logout}>
        Log out{" "}
      </Button>
    </Fragment>
  );
}

export default Logout;

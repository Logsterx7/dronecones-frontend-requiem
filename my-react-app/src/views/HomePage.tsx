import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <h1>Home Page, displays company info and links to Login and Signup</h1>
      <Button variant="contained" component={Link} to="/login">
        Log In
      </Button>
      <br></br>
      <Button variant="contained" component={Link} to="/signup">
        Sign Up
      </Button>
    </>
  );
}

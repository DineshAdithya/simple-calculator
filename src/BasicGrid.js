import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
//import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [text, setText] = useState("");
  console.log(text);
  // console.log(
  //   text.substring(0, text.indexOf("+")) + text.substring(text.indexOf(":") + 1)
  // );
  // console.log(text.substring(text.indexOf(":") + 1));
  // console.log(text.split("+"));
  function calculate() {
    setText(eval(text));
  }
  return (
    <Paper sx={{ flexGrow: 1 }}>
      <div className="screen">
        <input
          value={text}
          type="text"
          style={{ width: "100%", height: "50px" }}
        ></input>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item onClick={() => setText("")}>C</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>%</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>~~</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>/</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText((prevtext) => prevtext + "1")}>1</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "2")}>2</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "3")}>3</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText((prevtext) => prevtext + "*")}>*</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "4")}>4</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "5")}>5</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "6")}>6</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "-")}>-</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "7")}>7</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "8")}>8</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "9")}>9</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "+")}>+</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "00")}>00</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + "0")}>0</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => setText(text + ".")}>\</Item>
        </Grid>
        <Grid item xs={3}>
          <Item onClick={() => calculate(text)}>=</Item>
        </Grid>
      </Grid>
    </Paper>
  );
}

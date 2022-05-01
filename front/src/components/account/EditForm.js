import React, { useContext, useState } from "react";
import { UserContext } from "../user/reducer/userReducer";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Container,
  Box,
  Stack,
} from "@mui/material";
import * as Api from "../../api";

function EditForm({ props }) {
  const { userState, userDispatch } = useContext(UserContext);
  const { setIsEdit } = props;
  const [form, setForm] = useState({
    name: userState.user.name ? userState.user.name : "",
    email: userState.user.email ? userState.user.email : "",
    password: userState.user.password ? userState.user.password : "",
  });

  const handleFormValue = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Api.post("login/modify", {
        email: form.email,
        password: form.password,
        name: form.name,
      }); //setUser
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Stack
      sx={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ))`,
        width: "50%",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div
        style={{
          paddingTop: "100px",
          width: "500px",
          height: "500px",
          color: "white",
        }}
      >
        <p>EditForm</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => {
              handleFormValue("name", e.target.value);
            }}
          ></input>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => {
              handleFormValue("email", e.target.value);
            }}
          ></input>
          <button type="submit">Submit</button>
        </form>
        <button
          onClick={() => {
            console.log("editbutton");
            setIsEdit(false);
          }}
        >
          withDraw
        </button>
      </div>
    </Stack>
  );
}

export default EditForm;

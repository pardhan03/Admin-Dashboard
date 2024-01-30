import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { db } from "../utils/firebase";
import Swal from "sweetalert2";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAppStore } from "../Components/appStore";
const AddForm = ({ closeEvent }) => {
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState(0);
  const [Category, setCategory] = useState("");
  //const [rows,setRows]=useState([]);
  const setRows = useAppStore((state) => state.setRows);
  const empCollectionRef = collection(db, "Product");

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const createUser = async () => {
    await addDoc(empCollectionRef, {
      Name: Name,
      Price: Number(Price),
      Category: Category,
      date: String(new Date()),
    });
    getUsers();
    closeEvent();
    Swal.fire("Submitted!", "Your file has been submitted");
  };

  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center"></Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="Name"
            label="Name"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={Name}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="Price"
            label="Price"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            type="number"
            value={Price}
            onChange={handlePriceChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="Category"
            label="Category"
            variant="outlined"
            size="small"
            sx={{ minWidth: "100%" }}
            value={Category}
            onChange={handleCategoryChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AddForm;

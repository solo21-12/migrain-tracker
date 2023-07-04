"use client";
import { Button, Grid, TextField } from "@mui/material";

const Landing = () => {
  return (
    <Grid
      className="Landing"
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sx={{p:2}}>
        <h1 className=" text-5xl font-semibold barlow">Track your Migraines, help doctors find a cure</h1>
        <p className="max-w-2xl leading-snug text-gray-400 barlow mt-2 mb-4  text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore,
          voluptatem ducimus distinctio, a quo voluptates neque nulla quasi qui
          fugit aliquam tempora! Laboriosam ipsa, animi numquam consectetur nemo
          alias.
        </p>
      </Grid>

      <Grid
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 2,
        marginBottom:'40px'
        }}
      >
        <TextField
          sx={{ mr: 2 }}
          size="small"
          label="me@gmail.com"
          variant="outlined"
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#0589ff !important",
          }}
        >
          Signup
        </Button>
      </Grid>
      <Grid item>
        <img
          style={{
            maxWidth: "700px",
            width: "100%",
            height: "auto",
            margin: "auto",
          }}
          src="/doctor.png"
          alt="logo"
        />
      </Grid>
    </Grid>
  );
};

export default Landing;
<Grid className="Landing"></Grid>;

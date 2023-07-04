"use client";

import UserHeader from "@/components/userHeader";
import { Container, Fade, Grid } from "@mui/material";
import { useEffect, useState } from "react";

const Profile = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Fade in={show} timeout={2000}>
      <Container sx={{ position: "relatives" }}>
        <UserHeader />

        <Container>calender</Container>
      </Container>
    </Fade>
  );
};

export default Profile;

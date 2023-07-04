import {
  Box,
  Divider,
  Fade,
  Container,
  Typography,
  Avatar,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import { teal } from "@mui/material/colors";
const UserHeader = () => {
  return (
    <Box>
      <Container
        sx={{
          height: "100px",
        }}
      ></Container>

      <Container
        sx={{
          display: "flex",

          marginBottom: "80px",
        }}
      >
        <Avatar
          src={"/doctor.png"}
          alt={"User"}
          sx={{
            width: "120px",
            height: "120px",
            border: "5px dashed #f2f2f2",
            bgcolor: teal[500],
            fontSize: "25px",
          }}
        />
        <Box
          sx={{
            marginLeft: "15px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Barlow",
                color: "#817245",
                fontSize: "23px",
              }}
            >
              User Name
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Barlow",
                fontSize: "10px",
              }}
            >
              me@gmail.com
            </Typography>
          </Box>
          <VerifiedIcon
            color="primary"
            sx={{
              marginLeft: "10px",
              fontSize: "19px",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default UserHeader;

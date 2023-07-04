import {
  Avatar,
  FormControl,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
const Header = ({ switchTheme }: { switchTheme: any }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <Grid sx={{ p: 4 }}>
      <Grid
        container
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Grid item lg={6}>
          <Avatar alt="Dawit" />
        </Grid>
        <Grid
          xs={6}
          rowSpacing={1}
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <FormControlLabel
            control={
              <Switch onChange={switchTheme} name="gilad" color="primary" />
            }
            label="Night mode"
          />
          <Avatar
            className="pointer"
            onClick={() => router.push("/profile")}
            sx={{
              width: { xs: 40, lg: 56 },
              height: { xs: 40, lg: 56 },
              backgroundColor: "#1F6FFF",
            }}
          >
            D
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;

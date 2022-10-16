import { Paper, Grid, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  paddingTop: 20,
  paddingBottom: 20,
}));

const PageLayout = (props) => {
  return (
    <Grid container sx={{ marginTop: 2 }}>
      <Grid item md={12}>
        <Box
          sx={{
            p: 2,
            display: "grid",
            gap: 2,
          }}
        >
          <Item elevation={4}>{props.children}</Item>
        </Box>
      </Grid>
    </Grid>
  );
};
export default PageLayout;

import { Typography } from "@material-ui/core";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <Typography
        sx={{ textAlign: "center", my: 2 }}
        variant="caption"
        component="footer"
      >
        © 2021 Rui Ying
      </Typography>
    </>
  );
};

export default Layout;

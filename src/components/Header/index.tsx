import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { StyledAppBar, StyledImg, Styledbutton, Styleddiv } from "./style";
import logo from "../../assets/Logo.png";
import person from "../../assets/person.png";
import cart from "../../assets/cart.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utils/auth/auth";
import { auth } from "../../utils/firebase/auth";
import { signOut } from "firebase/auth";
import ProductBar from "../Product Bar";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/auth.action";
import Cookies from "universal-cookie";

const pages = ["About", "Equipment", "Parts", "Rentals", "Contact"];
const settings = ["Profile", "Account", "Dashboard"];

function ResponsiveAppBar() {
  const { user } = useSelector((state: any) => state.AuthReducer);

  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const cookies = new Cookies();

  const handleLogout = () => {
    dispatch(logout());
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const token = cookies.get("_user");

  return (
    <>
      <Styleddiv>
        <StyledAppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  display: { xs: "none", md: "flex", flexGrow: 1 },
                }}
              >
                <Link to={"/"}>
                  {" "}
                  <img className="logosize" src={logo} alt="logo" />
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <Link
                      to={page}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">
                          <b>{page}</b>
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Link to={"/"}>
                  {" "}
                  <img className="logosize" src={logo} alt="logo" />
                </Link>
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex", gap: "35px" },
                }}
              >
                {pages.map((page) => (
                  <Link to={page} style={{ textDecoration: "none" }}>
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "black", display: "block" }}
                    >
                      <span style={{ fontWeight: "600" }}>{page}</span>
                    </Button>
                  </Link>
                ))}
                {user?.email && !user?.roles.includes("seller") ? (
                  <Styledbutton
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/BecomeSeller")}
                  >
                    Become a Seller
                  </Styledbutton>
                ) : user?.email && user?.roles.includes("seller") ? (
                  <Styledbutton
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/seller/dashboard")}
                  >
                    Seller Dashboard
                  </Styledbutton>
                ) : null}
              </Box>

              {!user?.email ? (
                <>
                  <Link to={"/login"} style={{ textDecoration: "none" }}>
                    <Button sx={{ my: 2, color: "black", display: "block" }}>
                      <span className="sm:text-[1rem] text-[10px] font-bold">
                        Login
                      </span>
                    </Button>
                  </Link>
                  <Link to={"/signup"} style={{ textDecoration: "none" }}>
                    <Button sx={{ my: 2, color: "black", display: "block" }}>
                      <span className="sm:text-[1rem] text-[10px] font-bold">
                        Sign Up
                      </span>
                    </Button>
                  </Link>
                </>
              ) : (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton sx={{ p: 0 }}>
                      <StyledImg>
                        <img
                          onClick={handleOpenUserMenu}
                          src={person}
                          alt="person"
                        />
                      </StyledImg>
                    </IconButton>
                  </Tooltip>

                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                    <MenuItem onClick={() => handleLogout()}>
                      <Typography textAlign="center">Logout</Typography>
                    </MenuItem>
                  </Menu>
                </Box>
              )}
            </Toolbar>
          </Container>
        </StyledAppBar>
        <ProductBar />
      </Styleddiv>
    </>
  );
}
export default ResponsiveAppBar;

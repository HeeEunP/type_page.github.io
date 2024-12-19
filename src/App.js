import React        from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { NavermapsProvider } from 'react-naver-maps';
import AppBar       from '@mui/material/AppBar';
import Box          from '@mui/material/Box';
import Toolbar      from '@mui/material/Toolbar';
import IconButton   from '@mui/material/IconButton';
import Typography   from '@mui/material/Typography';
import Menu         from '@mui/material/Menu';
import MenuIcon     from '@mui/icons-material/Menu';
import Container    from '@mui/material/Container';
import Button       from '@mui/material/Button';
import MenuItem     from '@mui/material/MenuItem';
import AboutUs      from './AboutUs';
import History      from './History';
import Technologies from './Technologies';
import Location     from './Location';
import ScrollTo     from './ScrollTo';
import Footer       from './Footer'
import './App.css';


const pages = [
  { name: 'About',        path: '/about-us' },
  { name: 'History',      path: '/history' },
  { name: 'Technologies', path: '/technologies' },
  { name: 'Location',     path: '/location' },
];

function ResponsiveAppBar() 
{
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    return (
        <AppBar position="static" sx={{ backgroundColor: '#EFF5FB' }}>
            <Container maxWidth = "xl">
              <Toolbar disableGutters>
                  <Box sx = {{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                      <Link to="/">
                      <img
                          src   = "/imgfile/TMG_logo.png"
                          alt   = "Company Logo"
                          style = {{ height: '40px', cursor: 'pointer' }}
                      />
                      </Link>
                  </Box>

                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                      {pages.map((page) => (
                      <Button
                          key       = {page.name}
                          component = {Link}
                          to        = {page.path}
                          onClick   = {handleCloseNavMenu}
                          sx        = {{ my: 2, color: 'black', display: 'block', fontSize: '15px' }}
                      >
                          {page.name}
                      </Button>
                      ))}
                  </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black' }}>
                        <IconButton
                            size          = "large"
                            aria-label    = "account of current user"
                            aria-controls = "menu-appbar"
                            aria-haspopup = "true"
                            onClick       = {handleOpenNavMenu}
                            color         = "inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id              = "menu-appbar"
                            anchorEl        = {anchorElNav}
                            anchorOrigin    = {{vertical: 'bottom', horizontal: 'left'}}
                            keepMounted     = "true"
                            transformOrigin = {{vertical: 'top', horizontal: 'left'}}
                            open            = {Boolean(anchorElNav)}
                            onClose         = {handleCloseNavMenu}
                            sx              = {{ display: { xs: 'block', md: 'none' } }}
                            >
                            {pages.map((page) => (
                                <MenuItem
                                  key       = {page.name}
                                  onClick   = {handleCloseNavMenu}
                                  component = {Link}
                                  to        = {page.path}
                                >
                                <Typography sx = {{ textAlign: 'center' }}>{page.name} </Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                      </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}   
  

function AnimatedRoutes() 
{
  const location = useLocation();

  return (
    <SwitchTransition>
      <CSSTransition key={location.pathname} classNames="page" timeout={500}>
        <Routes location={location}>
          <Route path="/"             element={<AboutUs />} />
          <Route path="/about-us"     element={<AboutUs />} />
          <Route path="/history"      element={<History />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/location"     element={<Location />} />
        </Routes>
      </CSSTransition>
    </SwitchTransition>
  );
}

function App() 
{
  const CLIENT_ID = process.env.REACT_APP_MAP_CLIENT_KEY;

  return (
    <NavermapsProvider ncpClientId={CLIENT_ID}>
        <Router>
            <ScrollTo />
            <ResponsiveAppBar />
            <div className='main-content'>
              <AnimatedRoutes />
            </div>
            <Footer/>
        </Router>
    </NavermapsProvider>
  );
}

export default App;

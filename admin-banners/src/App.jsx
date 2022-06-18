import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import CurrentBanners from "./pages/CurrentBanners";
import AddBanner from "./components/AddBanner";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Typography align="center" variant="h3" gutterBottom>
          Banners
        </Typography>
        <Container>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Banners Actuales" {...a11yProps(0)} />
                    <Tab label="Agregar Banner" {...a11yProps(1)} />
                    <Tab label="Banners Anteriores" {...a11yProps(2)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  Banners Actuales
                  <CurrentBanners />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Agregar Banner
                  <AddBanner />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Banners Anteriores
                </TabPanel>
              </Box>
            </Paper>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;

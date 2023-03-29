import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props: any) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    < >
      {/* <Box > */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        className="inner-tabs"
        sx={{  marginBottom: '25px' }}
      >
        <Tab label="Tab 1" className="tabs" {...a11yProps(0)} />
        <Tab label="Tab 2" className="tabs" {...a11yProps(1)} />
        <Tab label="Tab 3" className="tabs" {...a11yProps(2)} />
      </Tabs>
      {/* </Box> */}
      <TabPanel value={value} index={0} >
        <Typography component="h6" variant="body1" className="tab-text" >
          1,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography component="h6" variant="body1" className="tab-text" >
          2,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography component="h6" variant="body1" className="tab-text" >
          3,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        </Typography>
      </TabPanel>
    </>
  );
}

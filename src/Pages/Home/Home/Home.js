// import Tabs from "@restart/ui/esm/Tabs";
import React from "react";
// import { Tab, Tabs } from "react-bootstrap";
// import { Navbar } from "react-bootstrap";
import Banner from "../Banner/Banner";
// import Breakfast from "../Breakfast/Breakfast";
// import FirstMeal from "../FirestMeal/FirstMeal";
// import MiniNav from "../MiniNav/Mininav";
import Navigation from "../Navigation/Navigation";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Breakfast from "../Breakfast/Breakfast";
import FirstMeal from "../FirestMeal/FirstMeal";
import Lunch from "../Lunch/Lunch";
import Dinner from "../Dinner/Dinner";
// import { TabList, TabPanel } from "react-tabs";

const Home = () => {
  return (
    <div className="body text-center">
      <Navigation></Navigation>
      <Banner></Banner>
      {/* tab */}

      <Tabs>
        <TabList>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
        </TabList>
        <TabPanel>
          <Breakfast></Breakfast>
        </TabPanel>
        <TabPanel>
          <Lunch></Lunch>
        </TabPanel>
        <TabPanel>
          <Dinner></Dinner>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Home;

import React from "react";
import StackNav from "./src/components/navigation/StackNav";
import { NavigationContainer } from "@react-navigation/native";
import { SingleAPI } from "./src/screens/API/SingleAPI";
import { Profile } from "./src/screens/Profile";
import JsonAPI from "./src/screens/API/JsonAPI";
import { PostAPI } from "./src/screens/API/PostAPI";
import DrawerNav from "./src/components/navigation/DrawerNav";

const App = () => {
  return (
  <NavigationContainer>
    <StackNav/>
  </NavigationContainer>
  )
}
export default App;
import { createSwitchNavigator } from "@react-navigation/core";
import { createBrowserApp } from "@react-navigation/web";
import HomeScreen from "../screens/Home";
import OtherScreen from "../screens/Other";



const routes = {
    home: {
        screen: HomeScreen,
      },
    other: {
        screen: OtherScreen,
    },
}

const MyNavigator = createSwitchNavigator(routes);

export default createBrowserApp(MyNavigator);
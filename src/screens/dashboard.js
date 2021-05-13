import React from "react";
import { View, ScrollView } from "react-native";
import DashboardLineGraph from "../GraphCharts/DashboardLineGraph";
import DashboardVerticalBarGraph from "../GraphCharts/DashboardVerticalBarGraph";

const Dashboard = () => {
    return(
        <View>
          <ScrollView>
            <DashboardLineGraph />
            <DashboardVerticalBarGraph />
            <DashboardLineGraph />
            <DashboardVerticalBarGraph />
          </ScrollView>
        </View>
    )
}


export default Dashboard;
import React from "react";
import { View, ScrollView } from "react-native";
import DashboardLineGraph from "../GraphCharts/DashboardLineGraph";
import DashboardVerticalBarGraph from "../GraphCharts/DashboardVerticalBarGraph";
import DashboardMoreLineGraph from "../GraphCharts/DashboardMoreLineGraph";

const Dashboard = () => {
    return(
        <View>
          <ScrollView>
            <ScrollView horizontal={true}>
              <DashboardMoreLineGraph color='#b2eeea' barcolor='#64c2be' title="Incomes" bottom="$5060.12" />
              <DashboardMoreLineGraph color='#c5ecd0' barcolor='#67c88c' title="Incomes" bottom="$5060.12"/>
              <DashboardMoreLineGraph color='#e1e6bf' barcolor='#aac241' title="Incomes" bottom="$5060.12"/>
              <DashboardMoreLineGraph color='#fbddbe' barcolor='#ffa600' title="Incomes" bottom="$5060.12"/>
            </ScrollView>
            <DashboardLineGraph />
            <DashboardVerticalBarGraph />
            <DashboardLineGraph />
            <DashboardVerticalBarGraph />
          </ScrollView>
        </View>
    )
}


export default Dashboard;
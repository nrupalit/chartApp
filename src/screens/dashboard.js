import React from "react";
import { View, ScrollView, Text , StyleSheet } from "react-native";
import DashboardLineGraph from "../GraphCharts/DashboardLineGraph";
import DashboardVerticalBarGraph from "../GraphCharts/DashboardVerticalBarGraph";
import DashboardMoreLineGraph from "../GraphCharts/DashboardMoreLineGraph";

const Dashboard = () => {
    return(
        <View>
          <Text style={style.title}>Finance</Text>
          <ScrollView>
            <ScrollView horizontal={true}>
              <DashboardMoreLineGraph color='#9dc6e0' barcolor='#0b7685' title="Incomes" bottom="$5060.12" />
              <DashboardMoreLineGraph color='#ffc1ba' barcolor='#ff6664' title="Spending" bottom="$2560"/>
              <DashboardMoreLineGraph color='#e5deff' barcolor='#60599b' title="Incomes" bottom="$5060.12"/>
              <DashboardMoreLineGraph color='#9dc6e0' barcolor='#0b7685' title="Spending" bottom="$2560"/>
            </ScrollView>
            <DashboardLineGraph />
            <DashboardVerticalBarGraph />
            <DashboardLineGraph />
            <DashboardVerticalBarGraph />
          </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
  title: {
    fontSize: 25, 
    fontWeight: 'bold',
    padding: 20
  }
})


export default Dashboard;
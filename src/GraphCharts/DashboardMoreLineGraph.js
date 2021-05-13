import React from "react";
import { View, Text, StyleSheet } from "react-native";
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { Card } from "native-base";

const DashboardMoreLineGraph = (props) => {
  return(
      <View>
          <Card style={{
                marginBottom: 10,
                padding: 30,
                paddingTop: 20,
                borderRadius: 20,
                backgroundColor: props.color,
                marginLeft: 20,
                marginTop: 10,
                border: 'none'
            }}>
                <Text style={style.title}>{props.title}</Text>
                <VerticalBarGraph
                    data={[20, 45, 28, 80, 99, 43, 50]}
                    width={150}
                    height={150}
                    barRadius={5}
                    barWidthPercentage={0.1}
                    barColor= {props.barcolor}
                    baseConfig={{
                        hasXAxisBackgroundLines: false,
                        hasYAxisLabels: false,
                        hasXAxisLabels: false,
                        xAxisLabelStyle: {
                        position: 'right',
                        prefix: '$'
                        }
                    }}
                    />
                    <Text style={{ color: props.barcolor , fontSize: 20, fontWeight: 'bold' }}>{props.bottom}</Text>
            </Card>
          
      </View>
  )
}

const style = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
})


export default DashboardMoreLineGraph;
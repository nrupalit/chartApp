import React from "react";
import { View, Text } from "react-native";
import LineGraph from '@chartiful/react-native-line-graph'

const DashboardLineGraph = () => {
  return(
      <View>
        <Text>Costs</Text>
          <LineGraph
            data={[10, 15, 7, 20, 14, 12, 10, 20]}
            width={300}
            height={200}
            lineColor='#347975'
            dotColor='#347975'
            lineWidth={2}
            isBezier
            hasDots={true}
            baseConfig={{
              startAtZero: false,
              hasXAxisBackgroundLines: false,
              xAxisLabelStyle: {
                prefix: '$',
                offset: 0
              }
            }}
            style={{
              marginBottom: 20,
              padding: 30,
              paddingTop: 20,
              borderRadius: 20,
              backgroundColor: '#dbf0ef',
              margin: 20
            }}
          />
      </View>
  )
}


export default DashboardLineGraph;
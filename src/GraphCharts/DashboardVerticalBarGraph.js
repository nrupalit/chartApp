import React from "react";
import { View } from "react-native";
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph'

const DashboardVerticalBarGraph = () => {
    return(
        <View>
            <VerticalBarGraph
            data={[20, 45, 28, 80, 99, 43, 50]}
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
            width={340}
            height={200}
            barRadius={5}
            barWidthPercentage={0.65}
            barColor='#53ae31'
            baseConfig={{
                hasXAxisBackgroundLines: false,
                xAxisLabelStyle: {
                position: 'right',
                prefix: '$'
                }
            }}
            style={{
                marginBottom: 30,
                padding: 30,
                paddingTop: 20,
                borderRadius: 20,
                backgroundColor: '#dff4d7',
                margin: 20
            }}
            />
        </View>
    )
  }
  
  
  export default DashboardVerticalBarGraph;

import React, {PureComponent} from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis,} from 'recharts';

class TemperatureChart extends PureComponent {

    render() {
        return (
            <LineChart
                width={600}
                height={500}
                data={this.props.statisticData}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 20,
                }}
            >
                <CartesianGrid strokeDasharray="1 1"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type="monotone" dataKey="Temperature" stroke="#8884d8" activeDot={{r: 2}}/>
                <Line type="monotone" dataKey="Feel like" stroke="#82ca9d"/>
            </LineChart>
        );
    }
}

export default TemperatureChart;
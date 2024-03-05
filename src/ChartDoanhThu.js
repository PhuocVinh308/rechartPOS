import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts';

class OrdersChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/orders/doanhthuthang')
            .then(response => response.json())
            .then(data => {
                this.setState({ orders: data });
            })
            .catch(error => console.error('Error fetching orders:', error));
    }

    render() {
        return (
            <div style={{ width: '30%', height: 400 }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={this.state.orders}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="thang" fontSize={10} tick={{ fill: 'black' }}>
                            <Label value={`Thống kê doanh thu theo từng tháng`} offset={0} position="insideBottom" />
                        </XAxis>
                        <YAxis fontSize={10} />
                        <Tooltip />
                        <Area type="monotone" dataKey="tongDoanhThu" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default OrdersChart;

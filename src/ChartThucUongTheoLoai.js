import React, { Component } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

class ThucUong extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/orders/thucuongyeuthich')
            .then(response => response.json())
            .then(data => {
                this.setState({ drinks: data });
            })
            .catch(error => console.error('Error fetching drinks:', error));
    }

    render() {
        return (
            <div style={{ width: '80%', height: 400 }}>
                <ResponsiveContainer>
                    <BarChart
                        data={this.state.drinks}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="tenNuoc" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="soLuong" fill="#8884d8">
                            {/* Add LabelList to display quantity at the top of each bar */}
                            <LabelList dataKey="soLuong" position="top" />
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default ThucUong;

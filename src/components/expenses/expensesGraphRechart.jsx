import { LineChart, ResponsiveContainer, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell } from 'Recharts';
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

class ExpensesGraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.expenses.reduce((all, item) => {
        all.push({
          name: item.expense_name,
          value: item.expense_balance
        })
        return all;
        },[]).slice(0,5),
      slideIndex: 0
      }

    this.styles = {
      headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
      },
      slide: {
        padding: 10,
      },
    };

    this.COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    this.RADIAN = Math.PI / 180;
    this.testData = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
  }


    handleSwipe = (value) => {
      this.setState({
        slideIndex: value,
      });
    };

    renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * this.RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * this.RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
          {this.state.data[index].name}
        </text>
      );
    };

    handleOnMouseOver = (event) => {
      return (
          <Tooltip content={this.state.data}></Tooltip>
      );
    };

  render() {
    return (
        <div>
          <Tabs
            onChange={this.handleSwipe}
            value={this.state.slideIndex}
          >
            <Tab label="Current Month" value={0} />
            <Tab label="Last Month" value={1} />
            <Tab label="Yearly Average" value={2} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleSwipe}
          >
            <div>
              <ResponsiveContainer
                width="100%"
                  height={400}
              >
                <PieChart>
                  <Pie
                    data={this.state.data}
                    labelLine={false}
                    label={this.renderCustomizedLabel}
                    outerRadius={'80%'}
                    fill="#8884d8"
                    onMouseOver={this.handleOnMouseOver}
                  >
                    {
                      this.state.data.map((entry, index) => <Cell fill={this.COLORS[index % this.COLORS.length]}/>)
                    }
                  </Pie>
                  <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            </div>
            <div style={this.styles.slide}>
              slide n°2
            </div>
            <div style={this.styles.slide}>
              slide n°3
            </div>
          </SwipeableViews>
        </div>
    );
  }
}

export default ExpensesGraph;
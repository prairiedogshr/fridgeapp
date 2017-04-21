import React, { Component } from 'react';
import { LineChart, ResponsiveContainer, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, Cell, AreaChart, Area } from 'recharts';
import { Tabs, Tab } from 'material-ui/Tabs';
import Event from 'material-ui/svg-icons/action/event';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Home from 'material-ui/svg-icons/action/home';
import SwipeableViews from 'react-swipeable-views';

class ExpensesGraph extends Component {
  constructor(props) {
    super(props)
    this.roommates = this.props.roommates;
    this.state = {
      yourShare: this.props.expenses.currentMonth.reduce((all, item) => {
        all.push({
          name: item.expense_name,
          value: (item.expense_balance / this.roommates)
        });
        return all;
        },[]).slice(0,10),
      currentHouse: this.props.expenses.currentMonth.reduce((all, item) => {
        all.push({
          name: item.expense_name,
          value: item.expense_balance
        });
        return all;
        },[]).slice(0,10),
      slideIndex: 0
    };
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

    this.COLORS = ['#36a2eb', '#ff9802', '#e91d63', '#4caf50'];
    this.RADIAN = Math.PI / 180;
    this.testData = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}];
  }

    handleSwipe = (value) => {
      this.setState({
        slideIndex: value,
      });
    };

    renderCustomizedLabelHouse = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * this.RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * this.RADIAN);

      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
          {this.state.currentHouse[index].name}
        </text>
      );
    };

    renderCustomizedLabelShare = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * this.RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * this.RADIAN);
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
          {this.state.yourShare[index].name}
        </text>
      );
    };

  render() {
    return (
        <div>
          <Tabs
            onChange={this.handleSwipe}
            value={this.state.slideIndex}
            inkBarStyle={{ background: '#551a8b' }}
          >
            <Tab label="Month" value={0} style={{ textTransform: 'none' }} icon={<Event />} />
            <Tab label="House" value={1} style={{ textTransform: 'none' }} icon={<Home />} />
            <Tab label="Year" value={2} style={{ textTransform: 'none' }} icon={<DateRange />} />
          </Tabs>
          <SwipeableViews
            index={this.state.slideIndex}
            onChangeIndex={this.handleSwipe}
          >
            <div>
              <ResponsiveContainer
                width="100%"
                height={340}
              >
                <PieChart>
                  <Pie
                    data={this.state.yourShare}
                    labelLine={false}
                    label={this.renderCustomizedLabelShare}
                    outerRadius={'80%'}
                    fill="#8884d8"
                  >
                    {
                      this.state.yourShare.map((entry, index) => <Cell fill={this.COLORS[index % this.COLORS.length]}/>)
                    }
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={this.styles.slide}>
              <ResponsiveContainer
                width="100%"
                height={340}
              >
                <PieChart>
                  <Pie
                    data={this.state.currentHouse}
                    labelLine={false}
                    label={this.renderCustomizedLabelHouse}
                    outerRadius={'80%'}
                    fill="#8884d8"
                  >
                    {
                      this.state.currentHouse.map((entry, index) => <Cell fill={this.COLORS[index % this.COLORS.length]}/>)
                    }
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={this.styles.slide}>
              <ResponsiveContainer
                width="100%"
                height={340}
              >
                <AreaChart
                  data={this.props.expenses.yearly}
                >
                <XAxis dataKey="expense_billing_month" />
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Tooltip/>
                <Area type='monotone' dataKey='expense_balance' stackId="1" stroke='#8884d8' fill='#8884d8' />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </SwipeableViews>
        </div>
    );
  }
}

export default ExpensesGraph;

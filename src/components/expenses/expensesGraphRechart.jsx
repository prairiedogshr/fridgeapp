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
          value: parseFloat((item.expense_balance / this.roommates).toFixed(2)),
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

    this.COLORS = ['#6734ba', '#ec1561', '#26c6da', '#89c541', '#ff9802'];
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

    const monthLookup = {
      0: 'Jan',
      1: 'Feb',
      2: 'Mar',
      3: 'Apr',
      4: 'May',
      5: 'Jun',
      6: 'Jul',
      7: 'Aug',
      8: 'Sep',
      9: 'Oct',
      10: 'Nov',
      11: 'Dec',
    }

    const monthOrder = {
      'May': 0,
      'Jun': 1,
      'Jul': 2,
      'Aug': 3,
      'Sep': 4,
      'Oct': 5,
      'Nov': 6,
      'Dec': 7,
      'Jan': 8,
      'Feb': 9,
      'Mar': 10,
      'Apr': 11,
    }

    const monthlyExpensesObj = this.props.expenses.yearly.reduce((all, item) => {
      if (all[monthLookup[item.expense_billing_month]]) {
        if (all[monthLookup[item.expense_billing_month]][item.expense_name]) {
          all[monthLookup[item.expense_billing_month]][item.expense_name] += (item.expense_balance / this.props.roommates)
        } else {
        all[monthLookup[item.expense_billing_month]][item.expense_name] = (item.expense_balance / this.props.roommates)
        }
      } else {
          all[monthLookup[item.expense_billing_month]] = {
            [item.expense_name]: (item.expense_balance / this.props.roommates)
          }
        }
      return all;
    },{})

    console.log('~~~~~~~~~~~~~~~~ ', monthlyExpensesObj)

    let monthlyExpensesArr = [];
    for (let key in monthlyExpensesObj) {
      monthlyExpensesArr.push({
        month: key,
        electricity: monthlyExpensesObj[key]['Electricity'],
        internet: monthlyExpensesObj[key]['Internet'],
        water: parseFloat(monthlyExpensesObj[key]['Water']).toFixed(2),
        cable: monthlyExpensesObj[key]['Cable'],
        rent: monthlyExpensesObj[key]['Rent'],
      })
    }

    monthlyExpensesArr = monthlyExpensesArr.sort((a, b) => {
      return monthOrder[a.month] - monthOrder[b.month]
    })

    console.log('did this woooooooooork??? ', monthlyExpensesArr)

    return (
        <div>
          <Tabs
            onChange={this.handleSwipe}
            value={this.state.slideIndex}
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
                    fill="#26c6da"
                  >
                    {
                      this.state.yourShare.map((entry, index) => <Cell fill={this.COLORS[index % this.COLORS.length]}/>)
                    }
                  </Pie>
                  <Tooltip separator=": $" />
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
                    fill="#26c6da"
                  >
                    {
                      this.state.currentHouse.map((entry, index) => <Cell fill={this.COLORS[index % this.COLORS.length]}/>)
                    }
                  </Pie>
                  <Tooltip separator=": $" />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div style={this.styles.slide}>
              <ResponsiveContainer
                width="100%"
                height={340}
              >
            <AreaChart width={600} height={400} data={monthlyExpensesArr}
              margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <XAxis dataKey='month'/>
              <YAxis/>
              <CartesianGrid strokeDasharray="3 3"/>
              <Tooltip separator=": $"/>
              <Area type='monotone' dataKey='electricity' fill='#ff9802' />
              <Area type='monotone' dataKey='internet' fill='#89c541' />
              <Area type='monotone' dataKey='cable' fill='#ec1561' />
              <Area type='monotone' dataKey='water' fill='#6734ba' />
              <Area type='monotone' dataKey='rent' stroke='#26c6da' fill='#26c6da' />
            </AreaChart>
              </ResponsiveContainer>
            </div>
          </SwipeableViews>
        </div>
    );
  }
}

export default ExpensesGraph;

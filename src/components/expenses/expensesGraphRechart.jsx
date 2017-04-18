import { LineChart, BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'Recharts';
import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

class ExpensesGraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.expenses.reduce((all, item) => {
        all.push({
          expense_name: item.expense_name,
          expense_balance: item.expense_balance
        })
        return all;
        },[]).slice(0,10),
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
    // setInterval(() => {
    //   console.log(this.state)
    // },2000)   
  } 


    handleSwipe = (value) => {
      console.log('hello? with: ', value  )
      this.setState({
        slideIndex: value,
      });
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
            <BarChart width={960} height={600} data={this.state.data}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="expense_name" />
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="expense_balance" fill="#8884d8"
            />
            </BarChart>
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
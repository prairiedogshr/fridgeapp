import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';



class ExpensesGraph extends Component {
  constructor(props) {
    super(props)
  }

  testFunc() {
    console.log('hi!')
  }

  expenseGraph() {
    const expensesData = this.props.expenses;

    let svg = d3.select("#map").append('svg')
      .attr('width', 960)
      .attr('height', 600)  

    let map = d3.select('svg'),
      margin = {top: 20, right: 20, bottom: 30, left: 20},
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom;

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().rangeRound([height, 0]);
    const g = svg.append('g')
      .attr('transform', "translate(" + margin.left + "," + margin.top + ")");

      x.domain(expensesData.length)
      y.domain([0, d3.max(expensesData, (d) => d.expense_balance)])

      g.append('g')
        .attr('class', 'axis axis-x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

      g.append('g')
        .attr('class', 'axis axis-y')
        .attr('transform', "rotate(-90)")
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Amount');

      g.selectAll('.bar')
        .data(expensesData)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.expense_balance))
        .attr('y', (d) => y(d.expense_balance))
        .attr('width', x.bandwidth())
        .attr('height', (d) => height-y(d.expense_balance));


  }

  componentDidMount() {
    console.log('props? ', this.props)
    this.expenseGraph()
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  }

  render () {
    return (
      <div id="map">hi</div>
      )
  }
}

export default ExpensesGraph;


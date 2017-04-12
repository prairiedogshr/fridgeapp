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
      margin = {top: 50, right: 50, bottom: 150, left: 150},
      width = +svg.attr('width') - margin.left - margin.right,
      height = +svg.attr('height') - margin.top - margin.bottom;

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
      y = d3.scaleLinear().range([height, 0]);

    const g = svg.append('g')
      .attr('transform', "translate(" + margin.left + "," + margin.top + ")");

      x.domain(expensesData.map(d => d.expense_name));
      y.domain([0, d3.max(expensesData, (d) => d.expense_balance)]);

      g.append('g')
        .attr('class', 'axis axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        // .attr('transform', 'rotate(-45)')
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'rotate(45)')
        .attr('y', 10)
        .attr('text-anchor', 'start')

      g.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', -60)
        .attr('x', ((-height-margin.top)/2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text('Expense $');

      g.append('g')
        .attr('class', 'axis axis--y')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('transform', "rotate(-90)")
        .attr('y', 6)
        .attr('dy', '1.0em')
        .attr('text-anchor', 'end');

      g.append('text')
        .attr('y', height + 50)
        .attr('x', (width/2))
        .attr('dy', '1.0em')
        .attr('text-anchor', 'middle')
        .text('Expense');

      g.selectAll('.bar')
        .data(expensesData)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.expense_name))
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

      <div id="map"></div>
      )
  }
}

export default ExpensesGraph;


import React, { useState,useEffect, useRef } from "react";
import DataTable from "react-data-table-component";
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [data, setData] = useState([
    {
      campaigns: "Cosmetics",
      clicks: 712,
      cost: 44272,
      conversions: 8,
      revenue: 16568,
    },
    {
      campaigns: "Serums",
      clicks: 3961,
      cost: 27331,
      conversions: 115,
      revenue: 362526,
    },
    {
      campaigns: "Facewash",
      clicks: 9462,
      cost: 76831,
      conversions: 123,
      revenue: 266800,
    },
    {
      campaigns: "Shampoos",
      clicks: 439,
      cost: 2151,
      conversions: 5,
      revenue: 11029,
    },
    {
      campaigns: "Conditioners",
      clicks: 1680,
      cost: 3864,
      conversions: 49,
      revenue: 175245,
    },
    {
      campaigns: "Facewash2",
      clicks: 4978,
      cost: 29370,
      conversions: 189,
      revenue: 623106,
    },
    {
      campaigns: "Total",
      clicks: 26510,
      cost: 143819,
      conversions: 489,
      revenue: 1573563,
    },
  ]);

  const columns = [
    {
      name: "Campaigns",
      selector: "campaigns",
      sortable: true,
    },
    {
      name: "Clicks",
      selector: "clicks",
      sortable: true,
    },
    {
      name: "Cost",
      selector: "cost",
      sortable: true,
      cell: (row) => `$ ${row.cost.toLocaleString()}`,
    },
    {
      name: "Conversions",
      selector: "conversions",
      sortable: true,
    },
    {
      name: "Revenue",
      selector: "revenue",
      sortable: true,
      cell: (row) => `$ ${row.revenue.toLocaleString()}`,
    },
  ];

  const customStyles = {
    headRow: {
      fontWeight: "bolder",
      color: "black",
    },
    rows: {
      lastRow: {
        background: "#f2f2f2",
        fontWeight: "bold",
      },
    },
  };

  useEffect(() => {
    if (chartInstance.current) {
      // Destroy the existing chart if it exists
      chartInstance.current.destroy();
    }

    const chartData = {
      labels: ['Male', 'Female', 'Others'],
      datasets: [
        {
          data: [40, 35, 25],
          backgroundColor: ['orange', 'lightblue', 'grey'],
        },
      ],
    };

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'doughnut', // Use 'doughnut' type for a donut chart
      data: chartData,
    });

    // Cleanup the chart when the component is unmounted
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);


  return (
    <div className="dashBoard">
      <div className="leftTable">
        <div className="leftHead">
          <p className="tableHeading">Add Insights</p>
          <i className="far fa-question-circle"></i>
        </div>
        <DataTable
          title="Sortable Data Table"
          columns={columns}
          data={data}
          defaultSortField="campaigns"
          defaultSortAsc={true}
          customStyles={customStyles}
          noHeader
        />
      </div>
      <div className="rightPie">
        <div className="leftHead">
          <p className="tableHeading">Add Insights</p>
          <i className="far fa-question-circle"></i>
        </div>
        <div className="pieChart">
      <canvas ref={chartRef}></canvas>
    </div>
      </div>
    </div>
  );
};

export default Dashboard;

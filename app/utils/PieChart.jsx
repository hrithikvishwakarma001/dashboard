"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Header } from "../components";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

const PieChart = () => {
	const [chartOptions, setChartOptions] = useState({
		chart: {
			width: 380,
			type: "pie",
		},
		labels: ["Basic Tees", "Custom short pants", "Super Hoodies"],
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						width: 280,
					},
					legend: {
						position: "bottom",
					},
				},
			},
			{
				breakpoint: 812,
				options: {
					chart: {
						width: 300,
					},
					legend: {
						position: "bottom",
					},
				},
			},
		],
	});

	const chartSeries = [55, 31, 14];

	return (
		<div id='chart'>
			<Header text='Top products' date='May-June 2021 &#709;' />
			<ReactApexChart
				options={chartOptions}
				series={chartSeries}
				type='pie'
				width={410}
			/>
		</div>
	);
};

export default PieChart;

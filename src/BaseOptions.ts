import Highcharts from 'highcharts';

const baseOptions: Highcharts.Options = {
  title: {
    text: "My First Highcharts Chart in React with TypeScript"
  },
  series: [
    { type: "line", name: "Series 1", data: [1, 3, 2, 4, 6, 5] }, // Fake data
    { type: "line", name: "Series 2", data: [2, 4, 1, 5, 3, 7] },
    { type: "line", name: "Series 3", data: [5, 3, 4, 2, 6, 1] },
    { type: "line", name: "Series 4", data: [5, 3, 4, 2, 6, 1] },
    { type: "line", name: "Series 5", data: [5, 3, 4, 2, 6, 1] },
    { type: "line", name: "Series 6", data: [5, 3, 4, 2, 6, 1] },
    { type: "line", name: "Series 7", data: [5, 3, 4, 2, 6, 1] },
    { type: "line", name: "Series 8", data: [5, 3, 4, 2, 6, 1] },
  ],
};

export default baseOptions;
import ColumnChart from "./components/ColumnChart";
import PieChart from "./components/PieChart";
import SparklineCharts from "./components/SparklineCharts";

function App() {
  return (
    <>
      <h1>graph</h1>

      <PieChart />
      <br />
      <SparklineCharts />
      <br />

      <ColumnChart />
    </>
  );
}

export default App;

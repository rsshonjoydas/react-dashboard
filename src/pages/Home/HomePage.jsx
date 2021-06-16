import Chart from '../../components/Chart/Chart';
import ChartData from '../../components/Chart/ChartData';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import styled from './HomePage.module.css';

const HomePage = () => (
  <div className={styled.home}>
    <FeaturedInfo />
    <Chart data={ChartData} title="User Analytics" grid dataKey="Active User" />
  </div>
);

export default HomePage;

import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import styled from './HomePage.module.css';

const HomePage = () => (
  <div className={styled.home}>
    <FeaturedInfo />
  </div>
);

export default HomePage;

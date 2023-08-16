'use client'
import { Result } from 'antd';
import withTheme from '../../../theme';

const Home = function Home() {
  return (
    <Result
      status="info"
      title="Welcome to admin platform!"
      subTitle="Please choose the menu on the left side!"
    />
  );
};

const HomePage = () => {
  return withTheme(<Home />);
}


export default HomePage ;

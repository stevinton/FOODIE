import React, { useState } from 'react';
import Corousals from './Corousals';
import Items from './Items';
import SearchBar from './SearchBar';
import ExpertsThought from './ExpertsThought';
import CookYourMeal from './CookYourMeal';
import TrackOrder from './TrackOrder';
import Help from './Help';
import RecentBlog from './RecentBlog';
import Bot from './ChatBot/Bot'; // Adjust the path as necessary
import BotIcon from './ChatBot/BotIcon'; // Adjust the path as necessary

const Home = () => {
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');
  const [botVisible, setBotVisible] = useState(false);

  const handleCategory = (item) => {
    setCategory(item);
  };

  const handleCountry = (item) => {
    setCountry(item);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSortBy = (criteria) => {
    setSortCriteria(criteria);
  };

  const toggleBot = () => {
    setBotVisible(!botVisible);
  };

  return (
    <div>
      <Corousals />
      <h1 className="m-5">Foods</h1>
      <SearchBar
        handleCategory={handleCategory}
        handleCountry={handleCountry}
        handleSearch={handleSearch}
        handleSortBy={handleSortBy}
      />
      <Items category={category} country={country} searchTerm={searchTerm} sortCriteria={sortCriteria} />
      <ExpertsThought />
      <CookYourMeal />
      <TrackOrder />
      <RecentBlog />
      <div className='m-5 p-4'>
        <Help />
      </div>
      <BotIcon onClick={toggleBot} />
      {botVisible && <Bot visible={botVisible} />}
    </div>
  );
};

export default Home;

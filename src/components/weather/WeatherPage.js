/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import FormContainer from './Form';
import { fetchWeather, searchWeather } from '../../actions/fetchWeather';
import WeatherItem from './weatherItem';


function WeatherPage({ weathers, fetchWeather, searchWeather }) {
  const [ result, setResult ] = useState({});

  useEffect(() => {
    const newRes = { ...result, ...weathers };
    setResult(newRes);
  }, [weathers]);

  useEffect(() => {
    fetchWeather();
  }, []);
  
  const searchData = data => {
    searchWeather(data);
  };

  return (
    <div>
      <FormContainer search={searchData} />
      <WeatherItem todo={result} />
    </div>
  )
}

const mapStateToProps = state => ({
  weathers: state.weathers.item
});

const mapDispatchToProps = {
  fetchWeather, searchWeather
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherPage);

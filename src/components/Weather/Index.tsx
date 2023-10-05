import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { motion } from "framer-motion";

import { getWeatherData } from "../../apis/weatherMap";

const WeatherContainer = styled.section``;
const Div = styled(motion.div)`
  display: flex;
`;
const Img = styled(motion.img)`
  height: 80px;
`;

export default function Weather() {
  const [coordinates, setCoordinates] = useState({
    latitude: 9999,
    longitude: 9999,
  });
  const {
    isLoading,
    data: weatherData,
    error,
  } = useQuery(
    ["weather", coordinates],
    getWeatherData.bind(null, coordinates.latitude, coordinates.longitude),
    { enabled: coordinates.latitude !== 9999 && coordinates.longitude !== 9999 }
  );

  if (error) {
    alert(
      "크롬 브라우저가 아니거나 위치 추적을 허용하지 않은 경우 날씨가 표시되지 않을 수 있습니다."
    );
    console.error(error);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      // console.log(latitude, longitude);
      setCoordinates({ latitude, longitude });
    });
  }, []);

  return (
    <WeatherContainer>
      {isLoading ? (
        "Loading..."
      ) : (
        <Div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        >
          <div>
            <div>{weatherData.weather[0].main}</div>
            <div>{Math.round(weatherData.main.temp - 273.15)}°C</div>
          </div>
          <Img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          ></Img>
        </Div>
      )}
    </WeatherContainer>
  );
}

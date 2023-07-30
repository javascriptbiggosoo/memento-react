import styled from "styled-components";
import { useEffect, useState } from "react";
import { getWeatherData } from "../../apis/weatherMap";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { usePosition } from "../../hooks/usePosition";

const WeatherContainer = styled.section``;
const Div = styled(motion.div)`
  display: flex;
`;
const Img = styled(motion.img)`
  height: 80px;
`;
export default function Weather() {
  const { latitude, longitude } = usePosition();
  const { isLoading, data, error } = useQuery(
    ["weather"],
    getWeatherData.bind(null, latitude, longitude)
  );
  console.log(data);
  if (error) {
    alert(
      "크롬 브라우저가 아니거나 위치 추적을 허용하지 않은 경우 날씨가 표시되지 않을 수 있습니다."
    );
    console.error(error);
  }

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
            <div>{data.weather[0].main}</div>
            <div>{Math.round(data.main.temp - 273.15)}°C</div>
          </div>
          <Img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          ></Img>
        </Div>
      )}
    </WeatherContainer>
  );
}

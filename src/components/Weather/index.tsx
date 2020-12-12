import React from 'react';
import { WiThermometer, WiHumidity, WiCloudyWindy } from 'react-icons/wi';
import { CgCompressV } from 'react-icons/cg';

import { WeatherData } from '../../store/modules/weather/protocols';
import { parseTemperature } from '../../utils/parseTemprature';

import plusMinus from '../../assets/plus-minus.svg';

import {
  Container,
  NameCountryContainer,
  NameCountryTitle,
  FeelsLikeContainer,
  FeelsLike,
  Title,
  SectionContainer,
  CardContainer,
  Image,
  Card,
  SectionCircle,
  SectionImage,
} from './styles';

interface WeatherProps {
  data: WeatherData;
}

const Weather = ({ data }: WeatherProps) => {
  const tempNow = parseTemperature(data.main.temp);
  const maxTempNow = parseTemperature(data.main.temp_max);
  const minTempNow = parseTemperature(data.main.temp_min);
  const feelsLikeNow = parseTemperature(data.main.feels_like);

  return (
    <Container>
      <NameCountryContainer>
        <NameCountryTitle>{`${data.name} - ${data.sys.country}`}</NameCountryTitle>
        <FeelsLikeContainer>
          <FeelsLike>feels like</FeelsLike>
          <p>
            {feelsLikeNow.fahreinheit}
            <sup>&#8457;</sup>
          </p>
          <p>
            {feelsLikeNow.celcius}
            <sup>&#8451;</sup>
          </p>
        </FeelsLikeContainer>
      </NameCountryContainer>
      <SectionContainer>
        <CardContainer>
          <Card>
            <SectionCircle>
              <Image
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt="Map"
              />
            </SectionCircle>
            <Title>{data.weather[0].description}</Title>
          </Card>
          <Card>
            <SectionCircle>
              <WiThermometer />
            </SectionCircle>
            <Title>Temp</Title>
            <div>
              <p>
                {tempNow.fahreinheit}
                <sup>&#8457;</sup>
              </p>
              <p>
                {tempNow.celcius}
                <sup>&#8451;</sup>
              </p>
            </div>
          </Card>
          <Card>
            <SectionCircle>
              <SectionImage src={plusMinus} alt="plus minus" />
            </SectionCircle>
            <Title>Max/Min</Title>
            <div>
              <div>
                {`${maxTempNow.fahreinheit} / ${minTempNow.fahreinheit}`}
                <sup>&#8457;</sup>
              </div>
              <div>
                {`${maxTempNow.celcius} / ${minTempNow.celcius}`}
                <sup>&#8451;</sup>
              </div>
            </div>
          </Card>
          <Card>
            <SectionCircle>
              <WiHumidity />
            </SectionCircle>
            <Title>Humidity</Title>
            <div>
              <p>{`${data.main.humidity}%`}</p>
            </div>
          </Card>
          <Card>
            <SectionCircle>
              <CgCompressV />
            </SectionCircle>
            <Title>Pressure</Title>
            <div>
              <p>{`${data.main.pressure} mb`}</p>
            </div>
          </Card>
          <Card>
            <SectionCircle>
              <WiCloudyWindy />
            </SectionCircle>
            <Title>Wind</Title>
            <div>
              <p>{`${data.wind.speed} km`}</p>
            </div>
          </Card>
        </CardContainer>
      </SectionContainer>
    </Container>
  );
};

export default Weather;

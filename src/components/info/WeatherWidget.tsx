import React, { useState } from 'react';

interface WeatherData {
  city: string;
  kind: string;
  time: string;
  temperature: number;
  temperatureScale: string;
  wind: number;
  windUnit: string;
  visibility: number;
  visibilityUnit: string;
  airQuality: number;
  humidity: number;
}

interface Props {
  data: WeatherData;
}

const WeatherWidget: React.FC<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="widget glassmorphism glow-shadow group relative h-fit w-full overflow-hidden rounded-lg border border-accent-lavender-400/60 p-4 backdrop-blur-2xl"
      open={isOpen}
    >
      <div className="absolute inset-0 -z-10 scale-95 bg-radial-gradient opacity-0 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-100"></div>

      <summary
        className="flex cursor-pointer flex-row items-center justify-between transition-all duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <span className="text-lg font-semibold">{data.city}</span>
          <small className="flex items-center text-sm opacity-70">
            <span>{data.kind}</span>
            <span className="mx-2">&bull;</span>
            <time>{data.time}</time>
          </small>
        </div>

        <div className="text-4xl font-bold">
          {data.temperature}
          <sup>
            &deg;<span>{data.temperatureScale}</span>
          </sup>
        </div>
      </summary>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <WeatherDetail name="Wind" value={`${data.wind} ${data.windUnit}`} icon="ri-windy-line" />
        <WeatherDetail
          name="Visibility"
          value={`${data.visibility} ${data.visibilityUnit}`}
          icon="ri-eye-line"
        />
        <WeatherDetail name="Air Quality" value={`${data.airQuality}`} icon="ri-seedling-line" />
        <WeatherDetail name="Humidity" value={`${data.humidity}%`} icon="ri-drop-line" />
      </div>
    </details>
  );
};

interface DetailProps {
  name: string;
  value: string;
  icon: string;
}

const WeatherDetail: React.FC<DetailProps> = ({ name, value, icon }) => (
  <span className="text-white">
    <small className="block text-sm opacity-70">{name}</small>
    <span className="flex items-center gap-2">
      <i className={`${icon} text-lg`}></i>
      {value}
    </span>
  </span>
);

export default WeatherWidget;

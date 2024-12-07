import React, { useState, useEffect, useRef } from 'react';

interface WeatherData {
  city: string;
  kind: string;
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
  const [maxHeight, setMaxHeight] = useState('0px');
  const [opacity, setOpacity] = useState('0');
  const [transform, setTransform] = useState('translateY(-10px)');
  const [currentTime, setCurrentTime] = useState(formatTime(new Date()));
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatTime(new Date()));
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const toggleDropdown = () => {
    if (isOpen) {
      setMaxHeight('0px');
      setOpacity('0');
      setTransform('translateY(-10px)');
      setTimeout(() => {
        setIsOpen(false);
      }, 300);
    } else {
      setIsOpen(true);

      setTimeout(() => {
        if (detailsRef.current) {
          setMaxHeight(`${detailsRef.current.scrollHeight}px`);
          setOpacity('1');
          setTransform('translateY(0)');
        }
      }, 0);
    }
  };

  return (
    <div className="widget glassmorphism glow-shadow group relative h-fit w-full overflow-hidden rounded-lg border border-accent-lavender-400/60 p-4 backdrop-blur-2xl">
      <div className="absolute inset-0 -z-10 scale-95 bg-radial-gradient opacity-0 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:opacity-100"></div>

      <div
        className="flex cursor-pointer flex-row items-center justify-between transition-all duration-300 ease-in-out"
        onClick={toggleDropdown}
      >
        <div>
          <span className="font-ibmPlexsans text-lg font-semibold">{data.city}</span>
          <small className="flex items-center text-sm opacity-70">
            <span>{data.kind}</span>
            <span className="mx-2">&bull;</span>
            <time>{currentTime}</time>
          </small>
        </div>

        <div className="text-4xl font-bold">
          {data.temperature}
          <sup>
            &deg;<span>{data.temperatureScale}</span>
          </sup>
        </div>
      </div>

      <div
        ref={detailsRef}
        style={{
          maxHeight,
          opacity,
          transform,
        }}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'mt-4' : ''} `}
      >
        {isOpen && (
          <div className="grid grid-cols-2 gap-4">
            <WeatherDetail
              name="Wind"
              value={`${data.wind} ${data.windUnit}`}
              icon="ri-windy-line"
            />
            <WeatherDetail
              name="Visibility"
              value={`${data.visibility} ${data.visibilityUnit}`}
              icon="ri-eye-line"
            />
            <WeatherDetail
              name="Air Quality"
              value={`${data.airQuality}`}
              icon="ri-seedling-line"
            />
            <WeatherDetail name="Humidity" value={`${data.humidity}%`} icon="ri-drop-line" />
          </div>
        )}
      </div>
    </div>
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

const formatTime = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  const formattedMinutes = minutes.toString().padStart(2, '0');
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export default WeatherWidget;

import { Weather } from "../../hooks/useWeather"
import style from "./WeatherDetail.module.css"

type WeatherDetailProps = {
    weather: Weather
}

export default function WeatherDetail({weather} : WeatherDetailProps) {
  return (
    <div>WeatherDetail</div>
  )
}

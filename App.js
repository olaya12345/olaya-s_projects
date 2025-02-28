import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import axios from 'axios';
import { useEffect, useState } from 'react';
import ImageList from './components/ListImages';
import ImageDetails from './components/ImageDetails';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const WEATHER_API_KEY = "33e466951cd785c9a7df10b9880821b2";

  useEffect(() => {
    axios
      .get(`https://pixabay.com/api/?key=47764681-5c011e9c7e6d8747e90fe6591&q=${term}&image_type=photo&pretty=true`)
      .then((response) => {
        setImages(response.data.hits);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(term)}&appid=${WEATHER_API_KEY}&units=metric`)
      .then((response) => {
        if (response.data.cod === 200) {
          setWeatherData(response.data);
          setError(null);
        } else {
          setWeatherData(null);
          setError("City not found or no weather data available");
        }
      })
      .catch((err) => {
        console.error(err);
        setWeatherData(null);
        setError("Failed to fetch weather data");
      });
  }, [term]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Navbar />
      <div className='mt-10 flex items-center justify-center py-10 bg-gray-100'>
        <div className="flex justify-center items-center mt-6 space-x-2">
          <div className="flex items-center border border-slate-300 rounded-lg bg-white">
            <input
              type="text"
              name="search"
              className="w-64 h-10 px-4 text-gray-700 placeholder-gray-400 rounded-l-lg focus:outline-none"
              placeholder="Search for images or city..."
              onChange={(e) => setTerm(e.target.value)}
            />
            <button className="px-4 h-10 text-gray-500 hover:text-blue-600 focus:outline-none">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      {weatherData && (
        <div className="bg-gray-100 p-4 rounded-md shadow-md mb-6">
          <h2 className="text-lg font-bold">{weatherData.name}</h2>
          <p><strong>Temperature: </strong>{weatherData.main.temp}°C</p>
          <p><strong>Humidity: </strong>{weatherData.main.humidity}%</p>
          <p><strong>Weather:</strong> {weatherData.weather[0].description}</p>
          <p><strong>Wind Speed: </strong> {weatherData.wind.speed} m/s</p>
        </div>
      )}
      {error && (
        <div className="bg-red-100 p-4 rounded-md shadow-md text-red-600 mb-6">
          {error}
        </div>
      )}
      {!isLoading && images.length === 0 && (
        <h1 className='text-center text-4xl mt-44'>No results Found</h1>
      )}
      {isLoading ? (
        <h1 className='text-center text-4xl mt-44'>Loading ......</h1>
      ) : (
        <main className='mt-0 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 p-10'>
          {images.map(image => (
            <ImageList key={image.id} image={image} onClick={() => handleImageClick(image)} />
          ))}
        </main>
      )}
      {selectedImage && (
        <ImageDetails
          image={selectedImage}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default App;

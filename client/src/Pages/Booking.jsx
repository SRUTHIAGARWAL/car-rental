import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const cars = [
  {
    id: 1,
    name: "Tesla Model 3",
    category: "Sedan",
    price: 89,
    image: "https://media.zigcdn.com/media/model/2024/Jun/bmw-m5-2025.jpg",
    features: {
      seats: "5",
      luggage: "3",
      fuel: "Electric",
    },
    rating: 4.9,
    reviews: 128,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    name: "BMW X5",
    category: "SUV",
    price: 129,
    image:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220825223325/Luxury-SUVs.jpg",
    features: {
      seats: "7",
      luggage: "5",
      fuel: "Hybrid",
    },
    rating: 4.8,
    reviews: 96,
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: 3,
    name: "Mercedes S-Class",
    category: "Luxury",
    price: 199,
    image:
      "https://www.carstudiomohali.com/wp-content/uploads/2023/11/Best-10-SUV-Cars-in-India-With-Prices-1.jpg",
    features: {
      seats: "5",
      luggage: "4",
      fuel: "Petrol",
    },
    rating: 4.9,
    reviews: 156,
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: 4,
    name: "Porsche 911",
    category: "Sports",
    price: 249,
    image:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg",
    features: {
      seats: "2",
      luggage: "2",
      fuel: "Petrol",
    },
    rating: 5.0,
    reviews: 84,
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: 5,
    name: "Audi e-tron",
    category: "SUV",
    price: 159,
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Wagon-R/10365/1687580655855/front-left-side-47.jpg",
    features: {
      seats: "5",
      luggage: "4",
      fuel: "Electric",
    },
    rating: 4.7,
    reviews: 92,
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: 6,
    name: "Toyota Camry",
    category: "Sedan",
    price: 69,
    image: "https://media.zigcdn.com/media/model/2024/Jun/bmw-m5-2025.jpg",
    features: {
      seats: "5",
      luggage: "3",
      fuel: "Hybrid",
    },
    rating: 4.6,
    reviews: 215,
    color: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: 7,
    name: "Range Rover Sport",
    category: "SUV",
    price: 189,
    image:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220825223325/Luxury-SUVs.jpg",
    features: {
      seats: "7",
      luggage: "5",
      fuel: "Diesel",
    },
    rating: 4.8,
    reviews: 145,
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    id: 8,
    name: "Ferrari F8",
    category: "Sports",
    price: 399,
    image:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg",
    features: {
      seats: "2",
      luggage: "1",
      fuel: "Petrol",
    },
    rating: 5.0,
    reviews: 42,
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    id: 9,
    name: "Volvo XC90",
    category: "SUV",
    price: 149,
    image:
      "https://www.carstudiomohali.com/wp-content/uploads/2023/11/Best-10-SUV-Cars-in-India-With-Prices-1.jpg",
    features: {
      seats: "7",
      luggage: "4",
      fuel: "Hybrid",
    },
    rating: 4.7,
    reviews: 168,
    color: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    id: 10,
    name: "Lexus LS",
    category: "Luxury",
    price: 179,
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Wagon-R/10365/1687580655855/front-left-side-47.jpg",
    features: {
      seats: "5",
      luggage: "3",
      fuel: "Hybrid",
    },
    rating: 4.8,
    reviews: 134,
    color: "bg-gray-50",
    iconColor: "text-gray-500",
  },
  {
    id: 11,
    name: "Honda Civic",
    category: "Sedan",
    price: 59,
    image: "https://media.zigcdn.com/media/model/2024/Jun/bmw-m5-2025.jpg",
    features: {
      seats: "5",
      luggage: "3",
      fuel: "Petrol",
    },
    rating: 4.5,
    reviews: 289,
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    id: 12,
    name: "Lamborghini Huracán",
    category: "Sports",
    price: 449,
    image:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg",
    features: {
      seats: "2",
      luggage: "1",
      fuel: "Petrol",
    },
    rating: 4.9,
    reviews: 36,
    color: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: 13,
    name: "Rolls-Royce Ghost",
    category: "Luxury",
    price: 599,
    image:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220825223325/Luxury-SUVs.jpg",
    features: {
      seats: "5",
      luggage: "4",
      fuel: "Petrol",
    },
    rating: 5.0,
    reviews: 28,
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    id: 14,
    name: "Tesla Model X",
    category: "SUV",
    price: 199,
    image:
      "https://www.carstudiomohali.com/wp-content/uploads/2023/11/Best-10-SUV-Cars-in-India-With-Prices-1.jpg",
    features: {
      seats: "7",
      luggage: "5",
      fuel: "Electric",
    },
    rating: 4.8,
    reviews: 156,
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: 15,
    name: "Bentley Continental",
    category: "Luxury",
    price: 449,
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Wagon-R/10365/1687580655855/front-left-side-47.jpg",
    features: {
      seats: "4",
      luggage: "3",
      fuel: "Petrol",
    },
    rating: 4.9,
    reviews: 48,
    color: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    id: 16,
    name: "Mazda 3",
    category: "Sedan",
    price: 55,
    image: "https://media.zigcdn.com/media/model/2024/Jun/bmw-m5-2025.jpg",
    features: {
      seats: "5",
      luggage: "3",
      fuel: "Petrol",
    },
    rating: 4.6,
    reviews: 198,
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: 17,
    name: "McLaren 720S",
    category: "Sports",
    price: 499,
    image:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2023/03_29_revuelto/gate_models_s_02_m.jpg",
    features: {
      seats: "2",
      luggage: "1",
      fuel: "Petrol",
    },
    rating: 5.0,
    reviews: 32,
    color: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
  {
    id: 18,
    name: "Aston Martin DB11",
    category: "Sports",
    price: 399,
    image:
      "https://d2m3nfprmhqjvd.cloudfront.net/blog/20220825223325/Luxury-SUVs.jpg",
    features: {
      seats: "4",
      luggage: "2",
      fuel: "Petrol",
    },
    rating: 4.9,
    reviews: 45,
    color: "bg-teal-50",
    iconColor: "text-teal-500",
  },
  {
    id: 19,
    name: "Volkswagen ID.4",
    category: "SUV",
    price: 89,
    image:
      "https://www.carstudiomohali.com/wp-content/uploads/2023/11/Best-10-SUV-Cars-in-India-With-Prices-1.jpg",
    features: {
      seats: "5",
      luggage: "4",
      fuel: "Electric",
    },
    rating: 4.7,
    reviews: 124,
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    id: 20,
    name: "Genesis G90",
    category: "Luxury",
    price: 159,
    image:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Wagon-R/10365/1687580655855/front-left-side-47.jpg",
    features: {
      seats: "5",
      luggage: "4",
      fuel: "Petrol",
    },
    rating: 4.8,
    reviews: 86,
    color: "bg-gray-50",
    iconColor: "text-gray-500",
  },
];


const CarDetailPage = () => {
  const { id } = useParams();
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const car = cars.find(car => car.id === parseInt(id));
    setSelectedCar(car);
  }, [id]);

  const [rentalDetails, setRentalDetails] = useState({
    pickUpDate: "",
    dropOffDate: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRentalDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking confirmed!");
  };

  return (
    selectedCar ? (
      <div className="container mx-auto p-6 mt-20">
        <div className="flex flex-col md:flex-row md:space-x-10">
          {/* Car Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
          
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="w-full h-80 object-cover rounded-lg border hover:shadow-lg hover:scale-105 delay-75 ease-in-out"
            />
          </div>

          {/* Car Details */}
          <div className="w-full md:w-1/2 bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedCar.name}</h2>
            <p className="text-xl text-gray-600 mb-4">{selectedCar.category} - ${selectedCar.price}/day</p>

            {/* Car Rating */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-1">
                <span className="text-2xl font-semibold text-gray-500">{selectedCar.rating}</span>
                <div className="flex text-sm text-yellow-500">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill={index < Math.floor(selectedCar.rating) ? "currentColor" : "none"}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.25l-6.403 3.377 1.233-7.264L1.43 7.642l7.361-.734L12 1.5l3.522 5.377 7.361.734-5.733 5.721 1.233 7.264L12 17.25z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">({selectedCar.reviews} reviews)</span>
            </div>

            {/* Car Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <div className="text-xl text-gray-600">🪑</div>
                <span>{selectedCar.features.seats} seats</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xl text-gray-600">🧳</div>
                <span>{selectedCar.features.luggage} luggage</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xl text-gray-600">⛽</div>
                <span>{selectedCar.features.fuel} fuel</span>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="flex flex-col">
                  <label htmlFor="pickUpDate" className="text-sm text-gray-600">Pick-up Date</label>
                  <input
                    type="datetime-local"
                    name="pickUpDate"
                    value={rentalDetails.pickUpDate}
                    onChange={handleChange}
                    className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dropOffDate" className="text-sm text-gray-600">Drop-off Date</label>
                  <input
                    type="datetime-local"
                    name="dropOffDate"
                    value={rentalDetails.dropOffDate}
                    onChange={handleChange}
                    className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="location" className="text-sm text-gray-600">Pickup Location</label>
                  <input
                    type="text"
                    name="location"
                    value={rentalDetails.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    className="p-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition ease-in-out duration-200"
              >
                Confirm Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    ) : (
      <div className="container mx-auto p-4">Loading...</div>
    )
  );
};

export default CarDetailPage;

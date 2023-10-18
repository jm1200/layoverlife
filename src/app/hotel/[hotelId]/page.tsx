import Image from "next/image";
import hotels from "../../../../mockData";

function HotelPage({ params }: { params: { hotelId: string } }) {
  console.log("testing", params.hotelId);

  const hotel = hotels.find((h) => h.id === params.hotelId);

  if (!hotel) return <div>Error, no hotel found</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Hotel Details */}
      <div className="flex flex-col items-center sm:items-start sm:flex-row mb-8">
        <div className="sm:w-1/3 mr-4 relative flex-shrink-0">
          <Image
            width={500}
            height={500}
            src={hotel.img}
            alt={hotel.name}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
        <div className="flex-grow flex-1 flex flex-col">
          <h1 className="text-4xl font-bold mt-4">{hotel.name}</h1>
          <p>Driving time from airport: TO DO</p>
        </div>
      </div>

      {/* Food Recommendations */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Food Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotel.recommendedRestaurants.map((food, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                width={500}
                height={500}
                src={food.img}
                alt={food.name}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h3 className="text-xl font-bold">{food.name}</h3>
              <p>{food.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Attraction Recommendations */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Attraction Recommendations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {hotel.attractions.map((attraction, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                width={500}
                height={500}
                src={attraction.img}
                alt={attraction.name}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <h3 className="text-xl font-bold">{attraction.name}</h3>
              <p>{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelPage;

export async function generateStaticParams() {
  return hotels.map((hotel) => ({
    hotelId: hotel.id,
  }));
}


import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { useState } from "react";

const TABS = [
  { label: "What we offer", value: "offer" },
  { label: "Reviews", value: "reviews" },
  { label: "About host", value: "host" },
];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [tab, setTab] = useState("offer");

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <img src={property.image} alt={property.name} className="w-full h-64 md:h-96 object-cover rounded-lg col-span-1 md:col-span-2" />
        {property.images?.slice(0, 4).map((img, i) => (
          <img key={i} src={img} alt={`img-${i}`} className="w-full h-40 object-cover rounded-lg" />
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-6 flex space-x-4 border-b">
        {TABS.map((t) => (
          <button
            key={t.value}
            className={`pb-2 px-2 border-b-2 ${tab === t.value ? "border-black font-semibold" : "border-transparent"}`}
            onClick={() => setTab(t.value)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tab === "offer" && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p>{property.description}</p>
            <div className="mt-4">
              <h2 className="text-2xl font-semibold">What this place offers</h2>
              <ul className="flex flex-wrap gap-2 mt-2">
                {property.category.map((amenity, index) => (
                  <li key={index} className="bg-gray-200 p-2 rounded-md text-sm">
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {tab === "reviews" && (
          <ReviewSection reviews={property.reviews} />
        )}
        {tab === "host" && (
          <div>
            <h2 className="text-2xl font-semibold mb-2">About Host</h2>
            <p>{property.host?.about || "No host information available."}</p>
          </div>
        )}
      </div>

      {/* Booking Section (fixed on desktop, stacked on mobile) */}
      <div className="mt-8 md:mt-0 md:fixed md:right-8 md:top-32 md:w-96">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
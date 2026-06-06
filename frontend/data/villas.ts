export type Villa = {
  slug: string;
  name: string;
  location: string;
  shortDescription: string;
  image: string;
  guests: string;
  bedrooms: string;
  price: string;
};

export const villas: Villa[] = [
  {
    slug: "villa-alexander",
    name: "Villa Alexander",
    location: "Gran Canaria",
    shortDescription:
      "A private villa designed for relaxed outdoor living, generous gatherings and quiet luxury.",
    image: "/villas/villa-alexander/1.jpg",
    guests: "Guests TBC",
    bedrooms: "Bedrooms TBC",
    price: "On request",
  },
  {
    slug: "villa-esmeralda",
    name: "Villa Esmeralda",
    location: "Gran Canaria",
    shortDescription:
      "Bright interiors, open-air terraces and a refined setting for a premium island escape.",
    image: "/villas/villa-esmeralda/1.jpg",
    guests: "Guests TBC",
    bedrooms: "Bedrooms TBC",
    price: "On request",
  },
  {
    slug: "villas-meloneras",
    name: "Villas Meloneras",
    location: "Meloneras, Gran Canaria",
    shortDescription:
      "A polished coastal stay close to the island's southern lifestyle, dining and beaches.",
    image: "/villas/villas-meloneras/1.jpg",
    guests: "Guests TBC",
    bedrooms: "Bedrooms TBC",
    price: "On request",
  },
];

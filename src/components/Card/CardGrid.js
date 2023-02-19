import React from "react";
import Card from "./index";


const CardGrid = () => {
  const cards = [
    {
      id:1,
      title: "Product 1",
      description: "Lorem ipsum dolor sit amet",
      price: 19.99,
      image: "/Eucalyptus-scaled.jpeg",
    },
    {
      id:2,
      title: "Product 2",
      description: "Consectetur adipiscing elit",
      price: 29.99,
      image: "/Floral-wreath-ii-scaled.jpeg",
    },
    {
      id:3,
      title: "Product 3",
      description: "Sed do eiusmod tempor incididunt",
      price: 39.99,
      image: "/Green-wreath-i-scaled.jpeg",
    },
    {
      id:4,
      title: "Product 4",
      description: "Ut labore et dolore magna aliqua",
      price: 49.99,
      image: "/Siblings-1-scaled.jpeg",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;

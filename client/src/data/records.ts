import type { RecordProduct } from "./record";

import thrillerImg from "../assets/thriller.jpg";
import rumoursImg from "../assets/rumours.jpg";
import kindOfBlueImg from "../assets/kind-of-blue.jpg";
import abbeyRoadImg from "../assets/abbey-road.jpg";
import purpleRainImg from "../assets/purple-rain.jpg";
import allEyezOnMeImg from "../assets/all-eyez-on-me.jpg";
import backInBlackImg from "../assets/back-in-black.jpg";
import blueTrainImg from "../assets/blue-train.jpeg";

export const records: RecordProduct[] = [
  {
    id: 1,
    title: "Thriller",
    artist: "Michael Jackson",
    price: 29.99,
    genre: "Pop",
    format: "Vinyl",
    condition: "Very Good Plus",
    imageUrl: thrillerImg,
    inStock: true,
    isNewArrival: true,
    isFeatured: true,
    description:
      "A classic pop record with timeless tracks and collectible appeal.",
  },
  {
    id: 2,
    title: "Rumours",
    artist: "Fleetwood Mac",
    price: 24.99,
    genre: "Rock",
    format: "Vinyl",
    condition: "Near Mint",
    imageUrl: rumoursImg,
    inStock: true,
    isNewArrival: false,
    isFeatured: true,
    description:
      "One of the most beloved rock albums, perfect for any vinyl collection.",
  },
  {
    id: 3,
    title: "Kind of Blue",
    artist: "Miles Davis",
    price: 34.99,
    genre: "Jazz",
    format: "Vinyl",
    condition: "Very Good",
    imageUrl: kindOfBlueImg,
    inStock: true,
    isNewArrival: true,
    isFeatured: true,
    description:
      "A legendary jazz album known for its smooth sound and historic importance.",
  },
  {
    id: 4,
    title: "Abbey Road",
    artist: "The Beatles",
    price: 27.99,
    genre: "Rock",
    format: "Vinyl",
    condition: "Very Good Plus",
    imageUrl: abbeyRoadImg,
    inStock: true,
    isNewArrival: false,
    isFeatured: false,
    description:
      "A must-have classic rock record from one of the most influential bands ever.",
  },
  {
    id: 5,
    title: "Purple Rain",
    artist: "Prince",
    price: 31.99,
    genre: "Funk / Pop",
    format: "Vinyl",
    condition: "Near Mint",
    imageUrl: purpleRainImg,
    inStock: true,
    isNewArrival: true,
    isFeatured: false,
    description:
      "A powerful blend of pop, rock, and funk with iconic production.",
  },
  {
    id: 6,
    title: "All Eyez on Me",
    artist: "2Pac",
    price: 36.99,
    genre: "Hip-Hop",
    format: "Vinyl",
    condition: "Mint",
    imageUrl: allEyezOnMeImg,
    inStock: false,
    isNewArrival: false,
    isFeatured: true,
    description:
      "A legendary West Coast hip-hop album with classic production, iconic energy, and major collector appeal.",
  },
  {
    id: 7,
    title: "Back in Black",
    artist: "AC/DC",
    price: 22.99,
    genre: "Hard Rock",
    format: "CD",
    condition: "Very Good Plus",
    imageUrl: backInBlackImg,
    inStock: true,
    isNewArrival: false,
    isFeatured: false,
    description:
      "A hard rock essential with huge guitars, powerful vocals, and classic energy.",
  },
  {
    id: 8,
    title: "Blue Train",
    artist: "John Coltrane",
    price: 39.99,
    genre: "Jazz",
    format: "Vinyl",
    condition: "Near Mint",
    imageUrl: blueTrainImg,
    inStock: true,
    isNewArrival: true,
    isFeatured: false,
    description:
      "A beautiful jazz record with rich saxophone work and collector value.",
  },
];


import Hero from "../components/Hero"
import VideoRow from "../components/VideoRow"
import BlogRow from "../components/BlogRow"
import InquiryCard from "../components/InquiryCard"
import ProductRow from "../components/ProductRow"
import { useNavigate } from "react-router-dom"

export default function LandingPage() {
  const youtubeVideos = [
    { id: "pMDK6F_XvlY", title: "Amilie Official Intro", isAmilie: true },
    { id: "axeDfdnYfGM", title: "Another Embedded Video", isAmilie: false },
    { id: "PlgPLcuhokQ", title: "Amilie Product Showcase", isAmilie: true },
    { id: "axeDfdnYfGM", title: "Another Embedded Video", isAmilie: false },
    { id: "pMDK6F_XvlY", title: "Amilie Official Intro", isAmilie: true },
    { id: "axeDfdnYfGM", title: "Another Embedded Video", isAmilie: false },
  ];
  const blogs = [
    {
      id: 1,
      img: "/blog2.png",
      date: "2025/08/19",
      title: "[Expert-supervised] 5 reasons why your Bichon Frise has a…",
      tags: ["Odor [Comfort]", "Hair loss [Comfort]", "Care and shampoo"],
    },
    {
      id: 2,
      img: "/blog1.png",
      date: "2025/08/18",
      title: "4 reasons why Chihuahua-Poodles bark and how to deal…",
      tags: [
        "Barking for no reason [Discipline and upbringing]",
        "Problem behavior",
        "By dog breed [Know-how]",
      ],
    },
    {
      id: 3,
      img: "/blog2.png",
      date: "2025/08/07",
      title: "Hairball prevention is important for long-haired cats!",
      tags: [
        "Barking for no reason [Discipline and upbringing]",
        "Problem behavior",
        "By dog breed [Know-how]",
      ],
    },
    {
      id: 4,
      img: "/blog1.png",
      date: "2025/08/18",
      title: "4 reasons why Chihuahua-Poodles bark and how to deal…",
      tags: [
        "Barking for no reason [Discipline and upbringing]",
        "Problem behavior",
        "By dog breed [Know-how]",
      ],
    },
    {
      id: 5,
      img: "/blog2.png",
      date: "2025/08/07",
      title: "Hairball prevention is important for long-haired cats!",
      tags: [
        "Hair loss [Comfort]",
        "Care and shampoo",
        "Recommended articles about cats",
      ],
    },
  ];
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Premium Dog Food",
      description: "Nutritious food for all dog breeds.",
      price: 29.99,
      image: "flooring.jpg",
      category: "Food",
      rating: 4.7,
      brand: "PetLife",
      tags: ["dog", "food", "nutrition"]
    },
    {
      id: 2,
      name:"flooring.jpg",
      description: "Durable scratching post for cats.",
      price: 19.99,
      image: "/flooring.jpg",
      category: "Toys",
      rating: 4.5,
      brand: "PetLife",
      tags: ["cat", "toy", "scratcher"]
    },
    {
      id: 3,
      name: "Bird Cage Deluxe",
      description: "Spacious and safe cage for birds.",
      price: 59.99,
      image: "/flooring.jpg",
      category: "Accessories",
      rating: 4.8,
      brand: "PetLife",
      tags: ["bird", "cage", "accessory"]
    },
    {
      id: 4,
      name: "Aquarium Starter Kit",
      description: "Complete kit for beginner fish owners.",
      price: 49.99,
      image: "/flooring.jpg",
      category: "Aquatic",
      rating: 4.6,
      brand: "PetLife",
      tags: ["fish", "aquarium", "kit"]
    },
    // Add more products as needed
  ];
  // Map product data to match ProductCard props
  const productCards = products.map((p) => ({
    ...p,
    img: p.image,
    onClick: () => navigate(`/products`)
  }));
  return (
    <div>
      <Hero />
      <VideoRow videos={youtubeVideos} rowTitle="Featured Videos" />
      <BlogRow blogs={blogs} />
      <ProductRow products={productCards} title="Featured Products" />
      <InquiryCard />
      {/* You can add more sections below the hero */}
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold">Welcome to Pet Lifestyle</h2>
        <p className="mt-4 text-gray-600">
          Explore products, case studies, and contact us for more details.
        </p>
      </section>
    </div>
  );
}

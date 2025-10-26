"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

interface Product {
  id: number;
  name: string;
  price: string;
  reviews: number;
  rating: number;
  image: string;
  soldOut?: boolean;
}

const DogPerfumeProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Cedar & Patchouli Dog Perfume",
        price: "$75 USD",
        reviews: 47,
        rating: 5,
        image: "/product.webp",
      },
      {
        id: 2,
        name: "Dog Perfume Sample Set",
        price: "$14 USD",
        reviews: 13,
        rating: 5,
        image: "/product.webp",

        soldOut: true,
      },
      {
        id: 3,
        name: "Amber Vanilla Cologne",
        price: "$65 USD",
        reviews: 32,
        rating: 4,
        image: "/product.webp",
      },
    ]);
  }, []);

  return (
    <>
      <Toaster />
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Luxury Dog Colognes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p.id}
              className="group border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Image Section */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top right buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition"
                    onClick={() => {
                      toast.success(`${p.name} added to wishlist!`);
                    }}
                  >
                    <Heart className="w-4 h-4 text-gray-700" />
                  </button>
                  <button
                    className="bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition"
                    onClick={() => {
                      toast.success(`${p.name} added to cart!`);
                    }}
                  >
                    <ShoppingCart className="w-4 h-4 text-gray-700" />
                  </button>
                </div>

                {/* Sold Out Badge */}
                {p.soldOut && (
                  <span className="absolute bottom-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                    Sold out
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {p.name}
                </h3>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-1 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 ${
                        i < p.rating ? "opacity-100" : "opacity-30"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <p className="text-sm text-gray-500 ml-1">
                    {p.reviews} reviews
                  </p>
                </div>

                {/* Price */}
                <p className="mt-3 text-gray-800 font-semibold">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DogPerfumeProducts;

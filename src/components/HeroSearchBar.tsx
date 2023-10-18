"use client";

import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { Input } from "./ui/input";
import hotels from "../../mockData";

export function HeroSearchBar() {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<typeof hotels>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 0) {
      const filteredSuggestions = hotels.filter((hotel) =>
        hotel.address.city.toLowerCase().includes(value.toLowerCase())
      );

      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search cities..."
        value={search}
        onChange={(e) => handleSearch(e)}
      />

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
          {suggestions.map((hotel, index) => (
            <Link key={index} href={`/hotel/${hotel.id}`}>
              <p key={hotel.id}>{`${hotel.address.city} - ${hotel.name}`}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

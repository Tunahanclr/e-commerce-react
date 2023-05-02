import React, { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Campaigns from "../components/Campaigns";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import Title from "../components/Title/Title";
import Subscribe from "../components/Subscribe";
import Customers from "../components/Customers";
export default function Home() {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div>
      <Hero />
      <About />
      <Campaigns />
      <Title />
      <Sorting setSort={setSort} />
      <div className="flex md:max-w-[1440px] max-w-[290px] mx-auto">
        <Category setCategory={setCategory} />
        <Products category={category} sort={sort} />
      </div>
      <Subscribe />
      <Customers />
    </div>
  );
}

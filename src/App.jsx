import React from "react";
import "../src/App.css";
import HeroSection from "./Sections/HeroSection";
import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "3z2jwl9q",
  dataset: "production",
  useCdn: true,
  withCredentials: true,
});

const App = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch('*[_type == "pet"]');
        setPets(result);
        console.log(pets);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(pets);

  return (
    <main className=" min-h-screen">
      <Navbar />
      <HeroSection />
      <div>
        {pets.map((pet) => (
          <div key={pet._id}>
            <p>{pet.name}</p>
            <p>{pet.animal}</p>
            <p>{pet.counts}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default App;

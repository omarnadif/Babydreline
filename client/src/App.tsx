import React, { useEffect, useState } from "react";
import axios from "axios";

interface Client {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  age: number;
  ecole_id: number;
}

const Content: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3001/getClients");
        setClients(result.data);
      } catch (error) {
        console.error("Error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="App">
       <Content />
      </div>
      <Footer />
    </>
  );
};

export default Content;

import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import Loading from "./Loading";
import Pagination from "./Pagination";

const api = "https://us-central1-it-sysarch32.cloudfunctions.net/pagination";

function Pokedex() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [language, setLanguage] = useState("english"); 

  const fetchPage = async (page) => {
    setIsLoading(true);
    const response = await fetch(`${api}?page=${page}&language=${language}`);
    const data = await response.json();
    setCurrentPage(page);
    setPokemon(data.data);
    setTotalPages(data.totalPages);
    setIsLoading(false);
  };

  const fetchNextPage = () => {
    const nextPage = currentPage + 1;
    fetchPage(nextPage);
  };

  const fetchPreviousPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      fetchPage(prevPage);
    }
  };

  useEffect(() => {
    fetchPage(currentPage);
  }, [currentPage, language]);

  if (isLoading || pokemon === null) {
    return <Loading />;
  }

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        fetchPreviousPage={fetchPreviousPage}
        fetchNextPage={fetchNextPage}
        setCurrentPage={setCurrentPage}
      />
      <Pokemon data={pokemon} language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default Pokedex;

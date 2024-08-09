import React, { useState, useEffect, useCallback } from "react";
import CharacterModal from "./CharacterModal";
import Loader from "./Loader";
import Character from "./Character";
import PaginationBox from "./PaginationBox";

const StarWarsCharacters = () => {
  const [show, setShow] = useState(false);

  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const pageUrl = "https://swapi.dev/api/people/";

  const fetchCharacters = useCallback(
    (url) => {
      setLoading(true);
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const getData = data.results.map((d) => {
            d.num = Math.floor(Math.random() * 1000);
            return d;
          });
          setCharacters(getData);
          setTotalPages(Math.ceil(data.count / 10));
          setLoading(false);
          setError("");
        })
        .catch((err) => {
          setError(
            "Ohh🫣, Starwars Characters are not available at the moment:("
          );
          setCharacters([]);
          setLoading(false);
        });
    },
    [setCharacters, setError, setLoading, setTotalPages]
  );

  useEffect(() => {
    fetchCharacters(pageUrl);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchCharacters(`https://swapi.dev/api/people/?page=${page}`);
  };

  const handleClose = () => setShow(false);

  const handleShow = (data) => {
    setSelectedCharacter(data);
    setShow(true);
  };

  return (
    <div className="starwars_container">
      <h1>Star Wars Characters</h1>
      {loading && <Loader />}
      {error && <div className="error">{error}</div>}

      <div className="starwars_wrapper">
        {characters.map((character) => (
          <Character
            key={character.url}
            character={character}
            handleShow={handleShow}
          />
        ))}
      </div>

      {characters.length > 0 && (
        <PaginationBox
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}

      <CharacterModal
        show={show}
        handleClose={handleClose}
        character={selectedCharacter}
      />
    </div>
  );
};

export default StarWarsCharacters;

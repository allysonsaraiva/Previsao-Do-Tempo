import React from 'react';
import propTypes from 'prop-types';

function Search({ handleSubmit, handleInputChange, city }) {
  return (
    <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
      <input
        type="text"
        placeholder="Cidade"
        className="p-3 rounded-lg outline-none w-full flex-1 shadow-md sm:max-w-[300px]"
        value={city}
        onChange={({ target: { value } }) => handleInputChange(value)}
      />
      <button
        type="submit"
        className="bg-blue-500 p-3 rounded-lg ml-3 text-white font-bold shadow-md"
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Search;

Search.propTypes = {
  handleSubmit: propTypes.object,
  handleInputChange: propTypes.object,
  city: propTypes.string,
}.isRequired;

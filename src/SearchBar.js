import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import './SearchBar.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const [searchError, setSearchError] = useState(false);

    const searchInput = useRef(null);

    const handleSearch = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    useEffect(() => {
        if (searchTerm.length > 0) {
            setSearching(true);
            setSearchError(false);
            fetch(`https://api.github.com/search/repositories?q=${searchTerm}`)
                .then((response) => response.json())
                .then((data) => {
                    setSearchResults(data.items);
                    setSearching(false);
                })
                .catch(() => {
                    setSearchError(true);
                    setSearching(false);
                });
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    return (
        <>
        <div className="searchBar">
            <input
                className="searchBar__input"
                type="text"
                placeholder="Search for a repository"
                value={searchTerm}
                onChange={handleSearch}
                ref={searchInput}
            />
            {searching && <div>Searching...</div>}
            {searchError && <div>Search Error</div>}
            {searchResults.length > 0 && (
                <div className="search-results">
                    <ul>
                        {searchResults.map((result) => (
                            <li key={result.id}>
                                <a href={result.html} target="_blank" rel="noreferrer">
                                    {result.full_name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
       
              
        
        </div>
        </>
    );
}

export default SearchBar;

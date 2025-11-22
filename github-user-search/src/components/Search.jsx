import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import { useUserSearch } from "../store/useGithubUserSearch";
import styles from "./styles.js";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const searchStatus = useUserSearch((state) => state.searchStatus);
  const searchResults = useUserSearch((state) => state.userData);
  const STATUS = useUserSearch((state) => state.STATUS);
  const resetSearch = useUserSearch((state) => state.resetSearch);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();

    if (!trimmedUsername && !location.trim() && !minRepos.trim()) {
      resetSearch();
      return;
    }

    const criteria = {
      username: trimmedUsername,
      location: location.trim(),
      minRepos: minRepos.trim(),
    };

    await fetchUserData(criteria);
  };

  const renderContent = () => {
    switch (searchStatus) {
      case STATUS.IDLE:
        return (
          <p className="p-2.5 text-center text-gray-500">
            Enter search criteria.
          </p>
        );

      case STATUS.LOADING:
        return (
          <p className="p-2.5 text-center text-blue-600 font-bold">
            Loading...
          </p>
        );

      case STATUS.ERROR:
        return (
          <p className="p-2.5 text-center text-red-600 font-bold">
            Looks like we cant find the user.
          </p>
        );

      case STATUS.SUCCESS:
        return <SearchResultsList results={searchResults} />;

      default:
        return null;
    }
  };

  const buttonStyle =
    searchStatus === STATUS.LOADING
      ? { ...styles.button, ...styles.buttonDisabled }
      : styles.button;

  const inputClasses =
    "p-2 border border-gray-300 rounded flex-grow min-w-[150px] focus:outline-none focus:ring-2 focus:ring-blue-300";

  return (
    <div style={styles.container}>
      <h1 className="text-2xl font-semibold mb-3">GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="GitHub Username (e.g., octocat)"
          className={inputClasses}
          disabled={searchStatus === STATUS.LOADING}
        />

        <div style={styles.inputGroup}>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g., London)"
            className={inputClasses}
          />
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Min Repositories (e.g., 10)"
            className={inputClasses}
            min="0"
          />

          <button
            type="submit"
            disabled={searchStatus === STATUS.LOADING}
            style={buttonStyle}
          >
            {searchStatus === STATUS.LOADING
              ? "Searching..."
              : "Advanced Search"}
          </button>
        </div>
      </form>

      <hr className="my-5 border-t border-gray-200" />

      <div>{renderContent()}</div>
    </div>
  );
}

export default Search;

// --- Display Components---

const SearchResultsList = ({ results }) => {
  if (!results || results.length === 0) {
    return (
      <p className="p-2.5 text-center text-gray-500">
        No users found matching your criteria.
      </p>
    );
  }

  const hasMore = results.total_count > results.items.length;
  const items = results.items;

  return (
    <div>
      <h2 className="text-xl mb-4 font-semibold">
        Found {results.total_count} Users
      </h2>

      <ul className="list-none p-0">
        {items.map((user) => (
          <li key={user.id} className="mb-2.5">
            <UserCard user={user} />
          </li>
        ))}
      </ul>

      {/* Placeholder for Load More / Pagination */}
      {hasMore && (
        <div className="text-center pt-2.5">
          <button
            className="bg-gray-100 text-gray-700 px-4 py-2 border border-gray-300 rounded hover:bg-gray-200 cursor-pointer"
            onClick={() =>
              alert("Load More functionality needs API service update!")
            }
          >
            Load More ({results.total_count - items.length} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

const UserCard = ({ user }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "15px",
      padding: "10px",
      border: "1px solid #ddd",
      borderRadius: "6px",
    }}
  >
    <img
      src={user.avatar_url}
      alt={`${user.login}'s avatar`}
      style={{ width: "60px", height: "60px", borderRadius: "50%" }}
    />
    <div style={{ flexGrow: 1 }}>
      <h3 style={{ fontSize: "1.1em", margin: "0 0 5px 0" }}>{user.login}</h3>
      <p style={{ fontSize: "0.9em", color: "#666", margin: "0" }}>
        Score: {user.score.toFixed(2)}
      </p>
    </div>
    <div>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#4CAF50", textDecoration: "none", fontWeight: "bold" }}
      >
        View Profile &rarr;
      </a>
    </div>
  </div>
);

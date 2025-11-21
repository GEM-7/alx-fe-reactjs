import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";
import { useUserSearch } from "../store/useGithubUserSearch.js";

export default function Search() {
  // Local state for the form input value only
  const [username, setUsername] = useState("");

  // Global state and actions from Zustand
  const searchStatus = useUserSearch((state) => state.searchStatus);
  const userData = useUserSearch((state) => state.userData);
  const STATUS = useUserSearch((state) => state.STATUS);
  // Reset action for clearing on submission
  const resetSearch = useUserSearch((state) => state.resetSearch);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    if (!trimmedUsername) {
      resetSearch();
      return;
    }

    // Call the service function, which handles all global state updates
    await fetchUserData(trimmedUsername);
  };

  const renderContent = () => {
    switch (searchStatus) {
      case STATUS.IDLE:
        return <p>Enter a GitHub username to search.</p>;

      case STATUS.LOADING:
        return <p>Loading...</p>;

      case STATUS.ERROR:
        return <p>Looks like we cant find the user.</p>;

      case STATUS.SUCCESS:
        return <UserDetails user={userData} />;

      default:
        return null;
    }
  };

  return (
    // Search Input Setup
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username (e.g., octocat)"
          disabled={searchStatus === STATUS.LOADING}
        />
        <button type="submit" disabled={searchStatus === STATUS.LOADING}>
          Search
        </button>
      </form>

      <hr />

      <div>{renderContent()}</div>
    </div>
  );
}

// UserDetails sub-component for displaying successful results
const UserDetails = ({ user }) => (
  <div>
    <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
    <h3>{user.name || user.login}</h3>
    <p>@{user.login}</p>
    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
      View Profile
    </a>
  </div>
);

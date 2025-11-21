import axios from 'axios';
import { useUserSearch } from '../store/useGithubUserSearch.js';

// Access the environment variables
const API_BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL || "https://api.github.com";

export async function fetchUserData(username) {
    // GitHub API endpoint for user search
    const endpoint = `${API_BASE_URL}/users/${username}`;

    const { startSearch, searchSuccess, searchError } = useUserSearch.getState();

    startSearch();

    try {
        const response = await axios.get(endpoint);
        searchSuccess(response.data);
    } catch (error) {
        // Handle specific errors like 404 (Not Found)
        if (error.response && error.response.status === 404) {
            // Error when user is not found
            searchError();
        } else {
            // General error
            searchError();
        }
    }
}
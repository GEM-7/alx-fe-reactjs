import axios from 'axios';
import { useUserSearch } from '../store/useGithubUserSearch';

const API_BASE_URL = "https://api.github.com";

function buildQueryString(criteria) {
    // Start with the main search term (username) or a default high-traffic term
    let queryParts = [criteria.username || 'users'];

    // Add location filter
    if (criteria.location) {
        queryParts.push(`location:${criteria.location}`);
    }

    // Add minimum repositories filter
    if (criteria.minRepos && parseInt(criteria.minRepos) > 0) {
        queryParts.push(`repos:>=${criteria.minRepos}`);
    }

    // Join all parts with the GitHub search separator (+)
    return queryParts.join('+');
}


export async function fetchUserData(criteria) {
    const queryString = buildQueryString(criteria);

    // Example API endpoint for advanced search
    // Uses the defined API_BASE_URL constant
    const endpoint = `https://api.github.com/search/users?q=${queryString}&per_page=10`;

    const { startSearch, searchSuccess, searchError } = useUserSearch.getState();

    startSearch();

    try {
        const response = await axios.get(endpoint);
        // GitHub Search API returns { total_count, items: [...] }
        searchSuccess(response.data);
    } catch (error) {
        console.error("GitHub Search API Error:", error.response?.data || error);
        searchError();
    }
}
// Access the environment variables
const API_BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL;
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

/**
 * Fetches profile data for a given GitHub username.
 */
export async function fetchUserProfile(username) {
    const url = `${API_BASE_URL}/users/${username}`;

    const headers = {
        'Content-Type': 'application/json',
        // Use the API Key only if authentication is required (e.g., for higher rate limits)
        // 'Authorization': `token ${API_KEY}`,
    };

    try {
        const response = await fetch(url, { headers });

        if (!response.ok) {
            throw new Error(`Failed to fetch user: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
}
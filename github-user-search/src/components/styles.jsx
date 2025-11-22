// --- Defining the Styles ---
export const styles = {
  // 1. Container Style
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  // 2. Input Group Layout
  inputGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    flexWrap: "wrap",
  },
  // 3. Button Styles
  button: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    minWidth: "150px",
    transition: "background-color 0.2s",
  },
  buttonDisabled: {
    backgroundColor: "#aaa",
    cursor: "not-allowed",
  },
  // Status and HR styles
  hr: {
    margin: "20px 0",
    border: "0",
    borderTop: "1px solid #eee",
  },
  statusText: {
    padding: "10px",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
  },
  loadingText: {
    color: "blue",
    fontWeight: "bold",
  },
  // Result List/Card styles
  resultsList: {
    listStyle: "none",
    padding: "0",
  },
  userCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
  },
  userAvatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  },
  userInfo: {
    flexGrow: 1,
  },
  userLogin: {
    fontSize: "1.1em",
    margin: "0 0 5px 0",
  },
  userScore: {
    fontSize: "0.9em",
    color: "#666",
    margin: "0",
  },
  userLink: {
    color: "#4CAF50",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

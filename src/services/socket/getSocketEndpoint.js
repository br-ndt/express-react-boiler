const ENDPOINT =
  process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

export default ENDPOINT;

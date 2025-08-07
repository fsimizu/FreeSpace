export default async function handler(req, res) {
  console.log("Function is running"); // ✅ Log entry point
  const { language } = req.query;
  console.log("Language param:", language); // ✅ Log parameter
  try {
    const response = await fetch(
      `https://nulv0bq4m1.execute-api.us-east-1.amazonaws.com/dev/language/${language}/videos`,
      {
        method: "GET",
        headers: {
          "x-api-key": process.env.VITE_API_GATEWAY_KEY || "missing-key",
        },
      }
    );

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Unexpected content type:", contentType);
      console.error("Raw response body:", text);
      return res.status(500).json({ error: "Unexpected response type" });
    }

    const data = await response.json();
    console.log("Fetched data:", data);
    res.setHeader("Content-Type", "application/json");
    res.status(response.status).json(data);
  } catch (err) {
    console.error("FETCH ERROR:", err);  // Make sure this runs
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
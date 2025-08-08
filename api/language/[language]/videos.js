export default async function handler(req, res) {
  //console.log("Function is running"); // ✅ Log entry point
  const { language } = req.query;
  console.log("[API] Called with language:", language)
  //console.log("Language param:", language); // ✅ Log parameter

  try {
  const response = await fetch(
    // `https://nulv0bq4m1.execute-api.us-east-1.amazonaws.com/dev/language/${language}/videos`,
    
    `https://nulv0bq4m1.execute-api.us-east-1.amazonaws.com/dev/language/${language}/videos`,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        "x-api-key": process.env.API_GATEWAY_KEY || "missing-key",
        // "x-api-key": "cVnYMy2Oj2a8LtMygahpu9HHDBgar4l23pECvi8e"
      },
    }
  );

  // const contentType = response.headers.get("content-type");
  // if (!contentType || !contentType.includes("application/json")) {
  //   const text = await response.text();
  //   console.error("Unexpected content type:", contentType);
  //   console.error("Raw response body:", text);
  //   return res.status(500).json({ error: "Unexpected response type" });
  // }


  const data = await response.json();
  return res.status(200).json(data);
  //   console.log("Fetched data:", data);
  //   res.setHeader("Content-Type", "application/json");
  //   res.status(response.status).json(data);
  } catch (err) {
    console.error("FETCH ERROR:", err);  // Make sure this runs
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
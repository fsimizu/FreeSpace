export default async function handler(req, res) {
    const { language } = req.query;

    try {
      const response = await fetch(
        `https://nulv0bq4m1.execute-api.us-east-1.amazonaws.com/dev/language/${language}/videos`,        
        {
          method: "GET",
          headers: {
            "x-api-key": process.env.VITE_API_GATEWAY_KEY, // secure
          },
        }
      );
        
      const contentType = response.headers.get("content-type");

      if (!response.ok || !contentType.includes("application/json")) {
        const text = await response.text(); // get full error
        console.error("Non-JSON response from API Gateway:", text);
        return res.status(500).json({ error: "Bad response from API Gateway" });
      }
  
      const data = await response.json();
      res.setHeader("Content-Type", "application/json");
      res.status(response.status).json(data);
    } catch (err) {
      console.error("Fetch error:", err);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }
  
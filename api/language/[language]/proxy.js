export default async function handler(req, res) {
    const { language } = req.query;

    try {
      const response = await fetch(
        `https://nulv0bq4m1.execute-api.us-east-1.amazonaws.com/dev/language/${language}/videos`,        
        {
          method: "GET",
          headers: {
            "x-api-key": import.meta.env.VITE_API_GATEWAY_KEY, // secure
          },
        }
      );
        
      const data = await response.json();
      res.setHeader("Content-Type", "application/json");
      res.status(response.status).json(data);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }
  
export default async function handler(req, res) {
    const { language, video } = req.query;
  
    try {
    const response = await fetch(   
      `https://nulv0bq4m1.execute-api.us-east-1.amazonaws.com/dev/language/${language}/videos/${video}`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "x-api-key": process.env.API_GATEWAY_KEY || "missing-key",
        },
      }
    );
  
    const data = await response.json();
    return res.status(200).json(data);
  
    } catch (err) {
      console.error("FETCH ERROR:", err); 
      res.status(500).json({ error: "Failed to fetch data" });
    }
  }
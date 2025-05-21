//? GET /cat : "Get a cat breed you want!"
export const getTitle = (req, res) => {
    res.status(200).json({ message: "Get a cat breed you want!" });
  };
  
  //? GET /cat/:input :  fetch 10 cat photos of the [input] breed_ids
  export const searchByBreed = async (req, res) => {
    try {
      const { input } = req.params;
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${input}&api_key=${process.env.KEY}`
      );
      if (!response.ok) {
        return res.status(response.status).json({ error: "Failed to fetch." });
      }
  
      const result = await response.json();
  
      if (!result.length) {
        return res.status(404).json({ error: "No cats found." });
      }
  
      res.status(200).json(result);
    } catch (error) {
      console.error("server error", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
  
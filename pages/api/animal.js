import getRandomAnimalName from "@/utils/getWord";
import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

// cors middleware function
function corsMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handle(req, res) {
  await corsMiddleware(req, res);
  getRandomAnimalName((err, animalName) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ name: animalName });
    }
  });
}

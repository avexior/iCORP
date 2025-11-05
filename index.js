import express from "express";
import axios from "axios";
import { connect } from "@ngrok/ngrok";

const app = express();
app.use(express.json());

const API_URL = "https://test.icorp.uz/interview.php";
const APP_PORT = 2858;
let secondPartCode = null;

app.post("/test-api", (req, res) => {
  secondPartCode = req.body.part2;
  res.send("OK").status(200);
});

app.get("/test-api", (req, res) => {
  secondPartCode = req.query.part2;
  res.send("OK").status(200);
});

async function main() {
  try {
    const server = app.listen(APP_PORT, () => {});

    const ngrok = await connect({
      addr: APP_PORT,
      authtoken: "30N3b9PXls0pOG7VFI8b21alf6p_7waUuGU5fYL4kxBASnLqg",
    });
    const publicUrl = ngrok.url();

    const payload = {
      msg: "just test",
      url: `${publicUrl}/test-api`,
    };

    const postResponse = await axios.post(API_URL, payload);

    const firstPartCode = postResponse.data.part1;

    let timeLimit = 0;
    while (!secondPartCode && timeLimit < 30000) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      timeLimit += 500;
    }

    if (!secondPartCode) {
      process.exit(1);
    }

    const fullCode = firstPartCode + secondPartCode;
    const data = await axios.get(API_URL, {
      params: { code: fullCode },
    });

    console.log(data.data);
    server.close();
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
}

main();

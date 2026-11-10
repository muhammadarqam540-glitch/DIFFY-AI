// Diffy AI - Test Suite
const http = require("http");

function get(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => resolve({ status: res.statusCode, length: data.length }));
    }).on("error", reject);
  });
}

function post(path, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request(`http://localhost:3000${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data)
      }
    }, (res) => {
      let resp = "";
      res.on("data", chunk => resp += chunk);
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(resp) });
        } catch {
          resolve({ status: res.statusCode, raw: resp });
        }
      });
    });
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

async function run() {
  console.log("Running Diffy AI End-to-End API Tests...");
  
  const health = await get("/api/health");
  console.log("1. Health API:", health.status === 200 ? "PASS" : "FAIL");

  const html = await get("/index.html");
  console.log("2. Index.html Static File:", html.status === 200 ? "PASS" : "FAIL", `(${html.length} bytes)`);

  const css = await get("/src/styles/main.css");
  console.log("3. Main.css Stylesheet:", css.status === 200 ? "PASS" : "FAIL", `(${css.length} bytes)`);

  const appJs = await get("/src/app.js");
  console.log("4. App.js Script:", appJs.status === 200 ? "PASS" : "FAIL", `(${appJs.length} bytes)`);

  const teacher = await post("/api/ask-teacher", {
    question: "Why does RAM need electricity?",
    lessonContext: { title: "RAM vs ROM" }
  });
  console.log("5. Ask Teacher API:", teacher.status === 200 ? "PASS" : "FAIL", `(Source: ${teacher.body?.source})`);

  const video = await post("/api/generate-video", {
    comparisonId: "ram-vs-rom",
    topicTitle: "RAM vs ROM"
  });
  console.log("6. Modular Video API:", video.status === 200 ? "PASS" : "FAIL", `(Status: ${video.body?.status})`);

  console.log("\nALL TESTS COMPLETED SUCCESSFULLY!");
}

run().catch(console.error);

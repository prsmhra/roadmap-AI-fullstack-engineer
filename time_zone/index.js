const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const express = require('express');

dayjs.extend(utc);
dayjs.extend(timezone);

console.log("day", dayjs().format())

const PORT = 8080;

const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));


app.get('/time', (req, res) => {
  const now = dayjs().format('HH:mm:ss');

  res.json({ time: now , timezone: Intl.DateTimeFormat().resolvedOptions().timezone , date: dayjs().format("dddd, MMMM D, YYYY") });
});

console.log(Intl.DateTimeFormat().resolvedOptions().timezone);
console.log(dayjs().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss"));




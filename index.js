```js
const express = require('express');
const path = require('path');
const QRCode = require('qrcode');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Simulated QR code data (in real bot, this will be dynamic)
const qrData = "https://web.whatsapp.com/qr/EXAMPLECODE";

app.get('/', async (req, res) => {
  try {
    const qrImageUrl = await QRCode.toDataURL(qrData);
    res.render('index', { qrImageUrl });
  } catch (err) { 
res.status(500).send("Error generating QR code");
  }
});

app.listen(port, () => {
  console.log( Web pair running on http://localhost:${port} );
});


---

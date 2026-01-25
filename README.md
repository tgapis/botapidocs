# 🤖 Bot API Docs

---

## 🌐 Live Website

👉 [**https://tgapis.github.io/botapidocs/**](https://tgapis.github.io/botapidocs/)

> Works instantly. No login. No setup. Just search, copy, and build.

---

## ✨ What is this?

**Bot API Docs** is a **modern, minimal, and developer‑focused documentation viewer** for the **Telegram Bot API**, generated directly from Telegram’s official **`botapi.json`** schema.

This project exists for developers who want **clarity, speed, and zero clutter** while working with Telegram bots.

---

## 🎯 Who is this for?

If you:

* Build Telegram bots frequently
* Prefer JSON & curl over long explanations
* Want all methods searchable in one place
* Don’t want heavy frameworks or ads

Then this tool is made **for you**.

---

## 🔥 Why this exists

The official Telegram Bot API documentation is powerful, but:

* It is long and text‑heavy
* JSON examples must be assembled manually
* Searching methods requires scrolling

**Bot API Docs** solves exactly that — nothing more, nothing less.

---

## 🚀 Features

* 🔍 Real‑time method search (instant dropdown)
* 📚 Complete Telegram Bot API methods list
* 🧾 Pre‑filled **Required JSON** and **Full JSON** payloads
* 💻 Ready‑to‑use `curl` commands with `<BOT_TOKEN>` placeholder
* 🌙 Dark / Light mode
* 📱 Fully responsive (mobile‑first)
* 🔄 Always up‑to‑date via GitHub Actions

---

## 🛠 How it works

### Source of truth

Telegram’s official schema:

```text
botapi.json
```

### Build pipeline

```text
botapi.json → generate.js → docs/data.js
```

### Frontend stack

* Pure HTML
* Modern CSS
* Vanilla JavaScript
* No frameworks
* No libraries
* No backend
* No tracking

### Auto updates

Whenever `botapi.json` changes, **GitHub Actions automatically rebuilds and deploys** the site.

---

## 📁 Project Structure

```text
.
├── botapi.json        # Official Telegram schema
├── generate.js        # Docs generator (Node.js)
├── docs/              # GitHub Pages output
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── data.js        # Auto‑generated
└── README.md
```

> ⚠️ `docs/data.js` is generated automatically — do not edit it manually.

---

## 🧪 Local Development

### Requirements

* Node.js 18+

### Build docs locally

```bash
npm install
npm run build
```

---

## 🔒 Security & Privacy

* ❌ No analytics
* ❌ No cookies
* ❌ No external APIs
* ❌ No Bot Tokens stored

All examples intentionally use:

```text
<BOT_TOKEN>
```

You must replace it manually.

---

## ⚠️ Disclaimer

* This is an **unofficial** project
* Not affiliated with **Telegram**
* Built for **personal & developer use**
* Uses only **public Telegram API schema**

Official documentation:
👉 [https://core.telegram.org/bots/api](https://core.telegram.org/bots/api)

---

## 👨‍💻 Author & Maintainer

### **[Ankit Chaubey](https://github.com/ankit-chaubey)**

This project was created out of real‑world frustration with repetitive official documentation scrolling endlessly and a desire for **clean, fast, and practical tools**.

* GitHub: [**@ankit-chaubey**](https://github.com/ankit-chaubey)
* Organization: [**tgapis**](https://github.com/tgapis)
* Project Repository: **[https://github.com/tgapis/botapidocs](https://github.com/tgapis/botapidocs)**

If you find this project useful or have ideas to improve it, feel free to open an issue or contribute.

---

## ⭐ Support the project

If this tool saves you time:

* ⭐ **Star** the repository
* 🍴 **Fork** it
* 🧠 **Share** it with other developers

Every star helps keep the project alive ✨

---

## 📜 License

MIT License — free to use, modify, and distribute.

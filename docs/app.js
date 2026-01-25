/**
 * This file is part of Telegram Bot API Docs (unofficial).
 * Author: Ankit Chaubey
 * GitHub: https://github.com/ankit-chaubey
 * Project: https://github.com/tgapis/botapidocs
 */

import { METHODS, META } from "./data.js";

const menu = document.getElementById("menu");
const content = document.getElementById("content");
const search = document.getElementById("search");
const searchResults = document.getElementById("searchResults");
const toggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");

/* =========================================================
   DARK MODE
========================================================= */
if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
}

toggle.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark")
    ? "dark"
    : "light";
};

/* =========================================================
   MOBILE MENU
========================================================= */
if (menuToggle) {
  menuToggle.onclick = () => {
    document.body.classList.toggle("menu-open");
  };
}

/* =========================================================
   SAFE MARKDOWN
========================================================= */
function md(text = "") {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.*?)\*/g, "<i>$1</i>")
    .replace(/\n/g, "<br>");
}

/* =========================================================
   SYNTAX HIGHLIGHT
========================================================= */
function highlight(code) {
  return code
    .replace(/"(.*?)":/g, '<span class="key">"$1"</span>:')
    .replace(/"(.*?)"/g, '<span class="string">"$1"</span>')
    .replace(/\b(true|false|null)\b/g, '<span class="boolean">$1</span>')
    .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
    .replace(/(-H|-X|-d)\b/g, '<span class="flag">$1</span>');
}

/* =========================================================
   MENU (METHODS ONLY)
========================================================= */
function renderMenu(list) {
  menu.innerHTML = "";

  list.forEach(m => {
    const a = document.createElement("a");
    a.href = `#${m.name}`;
    a.textContent = m.name;
    if (location.hash === `#${m.name}`) a.classList.add("active");
    menu.appendChild(a);
  });
}

/* =========================================================
   METHOD VIEW
========================================================= */
function renderMethod(name) {
  const m = METHODS.find(x => x.name === name);

  if (!m) {
    document.body.classList.remove("method-open");
  content.innerHTML = `
    <h2>Method not found</h2>

    <p>
      The method you are looking for does not exist or the URL is incorrect.
    </p>

    <p>
      👉 Use the <b>search box above</b> to quickly find a valid
      Telegram Bot API method, or select one from the list on the left.
    </p>
  `;
  return;
  }

  document.body.classList.add("method-open");
  document.body.classList.remove("menu-open");

  const curl = `curl -X POST https://api.telegram.org/bot<BOT_TOKEN>/${m.name} \\
  -H "Content-Type: application/json" \\
  -d '${JSON.stringify(m.jsonRequired, null, 2)}'`;

  content.innerHTML = `
    <h2>${m.name}</h2>

    <p>${md(m.description)}</p>

    ${m.returns ? `<p><b>Returns:</b> ${m.returns}</p>` : ""}
    ${m.href ? `<p><a href="${m.href}" target="_blank">Official docs ↗</a></p>` : ""}

    <div class="buttons">
      <button id="copyReq">📋 Required JSON</button>
      <button id="copyFull">📋 Full JSON</button>
      <button id="copyCurl">📋 curl</button>
      <button id="copyUrl">🔗 Link</button>
    </div>

    <h3>Parameters</h3>
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Type</th>
          <th>*</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${m.params.map(p => `
          <tr>
            <td>${p.name}</td>
            <td>${p.typesLabel}</td>
            <td>${p.required ? "*" : ""}</td>
            <td>${md(p.description)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>

    <h3>Required JSON</h3>
    <pre id="jsonReq">${highlight(JSON.stringify(m.jsonRequired, null, 2))}</pre>

    <h3>Full JSON</h3>
    <pre id="jsonFull">${highlight(JSON.stringify(m.jsonFull, null, 2))}</pre>

    <h3>curl</h3>
    <pre id="curlBlock">${highlight(curl)}</pre>
  `;

  document.getElementById("copyReq").onclick = () =>
    navigator.clipboard.writeText(document.getElementById("jsonReq").innerText);

  document.getElementById("copyFull").onclick = () =>
    navigator.clipboard.writeText(document.getElementById("jsonFull").innerText);

  document.getElementById("copyCurl").onclick = () =>
    navigator.clipboard.writeText(document.getElementById("curlBlock").innerText);

  document.getElementById("copyUrl").onclick = () =>
    navigator.clipboard.writeText(location.href);

  renderMenu(METHODS);
}

/* =========================================================
   HOME
========================================================= */
function renderHome() {
  document.body.classList.remove("method-open");

  content.innerHTML = `
    <h2>Telegram Bot API Docs</h2>

    <p><b>${META.version}</b> · Updated ${META.release_date}</p>

    <p>
      A <b>modern, minimal, and schema-driven documentation viewer</b>
      for the <b>Telegram Bot API</b>.
      This project is generated directly from Telegram’s official
      <code>botapi.json</code> schema and focuses on
      <b>clarity, speed, and developer productivity</b>.
    </p>

    <p>
      Maintained under the
      <a href="https://github.com/tgapis" target="_blank" rel="noopener">
        tgapis
      </a>
      organization, this tool is designed for developers who prefer
      <b>practical examples</b> over long-form documentation.
    </p>

    <h3>How to use</h3>
    <ul>
      <li>🔍 Instantly search any Bot API method</li>
      <li>📄 View parameters, types, and descriptions</li>
      <li>📋 Copy pre-filled JSON payloads (required & full)</li>
      <li>💻 Use ready-made <code>curl</code> commands with <code>&lt;BOT_TOKEN&gt;</code></li>
      <li>🌙 Switch between dark and light mode</li>
    </ul>

    <p>
      Developed by
      <a href="https://github.com/ankit-chaubey" target="_blank" rel="noopener">
        Ankit Chaubey
      </a>
      · Source available on
      <a href="https://github.com/tgapis/botapidocs" target="_blank" rel="noopener">
        GitHub
      </a>
    </p>
  `;
}

/* =========================================================
   ROUTING
========================================================= */
function handleRoute() {
  const name = location.hash.slice(1);

  if (name) {
    renderMethod(name);
  } else {
    renderHome();
  }
}

window.addEventListener("hashchange", handleRoute);
window.addEventListener("DOMContentLoaded", handleRoute);

/* =========================================================
   SEARCH DROPDOWN (REAL-TIME)
========================================================= */
search.oninput = () => {
  const q = search.value.trim().toLowerCase();
  searchResults.innerHTML = "";

  if (!q) {
    searchResults.style.display = "none";
    return;
  }

  const matches = METHODS.filter(m =>
    m.name.toLowerCase().includes(q)
  ).slice(0, 20);

  if (!matches.length) {
    searchResults.style.display = "none";
    return;
  }

  matches.forEach(m => {
    const a = document.createElement("a");
    a.href = `#${m.name}`;
    a.textContent = m.name;
    a.onclick = () => {
      search.value = "";
      searchResults.style.display = "none";
    };
    searchResults.appendChild(a);
  });

  searchResults.style.display = "block";
};

document.addEventListener("click", e => {
  if (!search.contains(e.target)) {
    searchResults.style.display = "none";
  }
});

/* =========================================================
   FOOTER (AUTO VERSIONED)
========================================================= */
const footer = document.createElement("footer");
footer.className = "footer";

footer.innerHTML = `
  <div>
    <strong>Telegram Bot API Docs</strong><br>
    ${META.version} · Updated ${META.release_date}
  </div>

  <div style="margin-top:4px">
    © <span id="year"></span> Developed by
    <a href="https://github.com/ankit-chaubey" target="_blank" rel="noopener">
      Ankit Chaubey
    </a>
    ·
    <a href="https://github.com/tgapis/botapidocs" target="_blank" rel="noopener">
      Source
    </a>
  </div>
`;

document.body.appendChild(footer);
document.getElementById("year").textContent = new Date().getFullYear();
/* =========================================================
   INIT
========================================================= */
renderMenu(METHODS);
handleRoute();

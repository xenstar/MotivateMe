<a name="readme-top"></a>

<div align="center">

<h1>💡 MotivateMe</h1>

<p><strong>Your words. One quote. Every new tab.</strong></p>

<p>🌱 Intentional &nbsp;·&nbsp; 🧠 Personal &nbsp;·&nbsp; 🔒 Private</p>

<p>
  A focused Chromium extension that replaces motivational noise with the
  reminders, goals, and beliefs that matter to you.
</p>

[✨ Features](#-features) · [🚀 Quick Start](#-quick-start) · [💾 Your Data](#-your-data) · [🔐 Privacy](#-privacy) · [🧩 Repository](#-repository) · [🤝 Contributing](#-contributing)

[![][github-stars-shield]][github-stars-link]
[![][github-forks-shield]][github-forks-link]
[![][github-issues-shield]][github-issues-link]
[![][github-last-commit-shield]][github-last-commit-link]
[![][privacy-policy-shield]][privacy-policy-link]<br/>
[![][chromium-shield]][chromium-link]
[![][local-first-shield]][privacy-policy-link]
[![][no-analytics-shield]][privacy-policy-link]
[![][no-account-shield]][privacy-policy-link]

</div>

<details>
<summary><kbd>Table of contents</kbd></summary>

#### 📚 TOC

- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [💾 Your Data](#-your-data)
- [🔐 Privacy](#-privacy)
- [🖥️ Browser Support](#️-browser-support)
- [🧩 Repository](#-repository)
- [🛠️ FAQ](#️-faq)
- [🤝 Contributing](#-contributing)
- [📬 Contact](#-contact)
- [📄 License](#-license)

####

</details>

## ✨ Features

- [x] 🗂️ **Your list, your rules**
  - Add, edit, delete, and search quotes from the Options page.
- [x] ⭐ **Favorites appear more often**
  - Favorited quotes are twice as likely to appear on a new tab.
- [x] 🎲 **One quote at a time**
  - No clocks, weather widgets, to-do lists, or streaks competing for attention.
- [x] 💾 **Backup and restore**
  - Export your list to JSON and restore it on another device.
- [x] ☁️ **Optional auto-sync**
  - Choose a file once and MotivateMe can keep that backup updated.
- [x] 🌗 **Personal preferences**
  - Light, dark, and automatic themes, with language and onboarding settings.
- [x] 🚫 **No motivational noise**
  - Your reminders, your goals, and your words. Nothing written by a stranger.
- [x] 🔒 **Privacy-first design**
  - No account, analytics, tracking, advertising, or automatic remote calls.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🚀 Quick Start

1. 🛍️ Install MotivateMe from its [Chrome Web Store listing][chromewebstore-link].
2. 📌 Pin the extension if you want quick access to its settings.
3. ✍️ Open the **Options** page and add your own quotes, goals, or reminders.
4. ⭐ Favorite the lines you want to see more often.
5. 🌱 Open a new tab and get one meaningful reminder instead of a dashboard.

### 💾 Optional setup

- Export a JSON backup from the Options page.
- Restore a previous JSON backup on any device.
- Choose a backup file once to enable auto-sync to that file.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 💾 Your Data

MotivateMe keeps your data in the browser's local extension storage:

- Your quotes and favorites
- Theme and language preferences
- Onboarding and review-prompt state
- The backup-file path used by auto-sync
- A small daily-open counter used for quote selection

### 🛂 You stay in control

- **Export:** save your quotes as a JSON file whenever you choose.
- **Restore:** import a backup you previously created.
- **Clear all quotes:** remove every saved quote from the Options page.
- **Uninstall:** deleting the extension removes its local storage.

MotivateMe does not sync your data to a cloud account. Auto-sync writes only to
the file or location you explicitly choose.

[Read the full privacy policy →][privacy-policy-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔐 Privacy

### What MotivateMe never does

- 🚫 No account or sign-in
- 🚫 No analytics, telemetry, or tracking events
- 🚫 No cookies or browser fingerprinting
- 🚫 No advertising or data sales
- 🚫 No remote scripts
- 🚫 No automatic network requests

### What it does store

- ✅ Quotes and preferences in `chrome.storage.local`
- ✅ A user-selected backup path when auto-sync is enabled

### Permissions

| Permission | Purpose |
| --- | --- |
| `storage` | Saves quotes and preferences locally in your browser. |
| `downloads` | Powers the user-initiated JSON backup flow, including fallback support for browsers without the File System Access API. |

The only outbound action is the optional **Support MotivateMe** donation link.
It opens Ko-fi in a new tab only after you click it. The extension does not load
remote scripts or send your quote data anywhere.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🖥️ Browser Support

MotivateMe is designed for Chromium-based browsers, including Chrome, Brave,
Comet, and similar Chromium browsers.

Backup behavior may vary by browser:

- Browsers with File System Access API support can use a connected backup file.
- Brave, Comet, and other browsers that do not expose that API use the
  `downloads` permission as the backup fallback.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🧩 Repository

This public repository hosts the project documentation and privacy-policy site.
The extension source code is not currently published here.

```text
MotivateMe/
├── .nojekyll      # GitHub Pages configuration
├── index.html     # Public English privacy policy
└── README.md      # Product documentation
```

### 📚 Public links

- 🌐 [Live privacy policy][privacy-policy-link]
- 🐞 [GitHub issues][github-issues-link]
- 🛍️ [Chrome Web Store search][chromewebstore-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🛠️ FAQ

### Is my quote list sent anywhere?

No. Quotes remain in local extension storage unless you export or auto-sync them
to a file you choose.

### Does MotivateMe sync through the cloud?

No. There is no account or cloud service. Auto-sync uses a local file path that
you select.

### Why does the extension request storage and downloads?

`storage` keeps your quotes and settings local. `downloads` supports backup
export, including on Chromium browsers without File System Access API support.

### How do I remove all saved data?

Use **Clear all quotes** in the Options page, or uninstall the extension to
remove its local storage.

### Where can I read the complete policy?

The full policy is published at [xenstar.github.io/MotivateMe][privacy-policy-link].

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Feedback, bug reports, and privacy questions are welcome through the
[GitHub issue tracker][github-issues-link].

When opening an issue:

- Describe the browser and version involved.
- Explain the behavior you expected and what happened instead.
- Do not post personal quote data, backup files, or sensitive information.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📬 Contact

- 🐞 Open an issue in this repository.
- 🛍️ Find the maintainer contact on the Chrome Web Store listing.
- 🔐 Read the [privacy policy][privacy-policy-link].

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

## 📄 License

No license file is currently included in this repository.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

<div align="center">

*Built with privacy as a feature, not an afterthought.* 🔒

README layout inspired by [🧙 Readme Wizard](https://github.com/lobehub/lobe-readme-wizard).

</div>

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-black?style=flat-square
[chromewebstore-link]: https://chromewebstore.google.com/search/MotivateMe
[chromium-link]: https://www.chromium.org/Home/
[chromium-shield]: https://img.shields.io/badge/Chromium-enabled-4285F4?labelColor=black&logo=googlechrome&logoColor=white&style=flat-square
[github-forks-link]: https://github.com/xenstar/MotivateMe/forks
[github-forks-shield]: https://img.shields.io/github/forks/xenstar/MotivateMe?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/xenstar/MotivateMe/issues
[github-issues-shield]: https://img.shields.io/github/issues/xenstar/MotivateMe?color=ff80eb&labelColor=black&style=flat-square
[github-last-commit-link]: https://github.com/xenstar/MotivateMe/commits/main
[github-last-commit-shield]: https://img.shields.io/github/last-commit/xenstar/MotivateMe?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/xenstar/MotivateMe/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/xenstar/MotivateMe?color=ffcb47&labelColor=black&style=flat-square
[local-first-shield]: https://img.shields.io/badge/Local--first-2ECC71?labelColor=black&style=flat-square
[no-account-shield]: https://img.shields.io/badge/Account-not--required-E74C3C?labelColor=black&style=flat-square
[no-analytics-shield]: https://img.shields.io/badge/Analytics-none-9B59B6?labelColor=black&style=flat-square
[privacy-policy-link]: https://xenstar.github.io/MotivateMe/
[privacy-policy-shield]: https://img.shields.io/badge/Privacy-policy-8A6D3B?labelColor=black&style=flat-square

---
title: "🤝 Contributing"
nav_order: 100
permalink: /docs/Guide-OpenMower-Mowgli/aide-contribution/
layout: default
parent: "🏠 OpenMower Guide"
---

import links from '@site/src/data/links';

# 🤝 Contributing

![Contribution guide illustration](/img/contribution-guide.png)

Thank you for your interest in improving this guide! Whether you are a user, developer or simply curious, every contribution is welcome 💡

---

## 🧰 What can you improve?

Here are some examples of possible contributions:

- ✅ Fix typos or rephrase an explanation
- 🗭 Suggest an improvement to a step
- 📸 Add a photo or screenshot
- 🧪 Add details about a bug or a tip
- 🔧 Document a configuration or alternative component

---

## 🛠️ How to contribute?

### 🔹 Method 1: Via GitHub (quick)

1. Go to the guide page on <a href={links.community.github} target="_blank">GitHub</a>
2. Navigate to the `docs/Guide-OpenMower-Mowgli/` folder
3. Click on the file you want to modify
4. Click on ✏️ `Edit this file`
5. Propose your changes, then click `Propose changes`
6. Create a `Pull Request`

✅ This method is ideal for typos or quick minor improvements.

---

### 🔹 Method 2: Clone and edit locally

If you are comfortable with Git, you can clone the repository, make your changes, then submit a Pull Request.

```bash
git clone https://github.com/Mowglifrenchtouch/mowgli-docs.git
cd mowgli-docs
npm install
npm start
```

- Edit the `.md` files in `docs/Guide-OpenMower-Mowgli/`
- Test your changes locally
- Then submit a Pull Request on GitHub

---

## 🗓️ Contribution tips

- Be clear and concise ✅
- Test the step you are modifying 🧪
- Favour simple sentences (beginner level)
- Don't hesitate to illustrate with images in `static/img/`

---

## 💬 Need help?

Join the Telegram community: <a href={links.community.telegramFR} target="_blank">@OpenMower_FR</a>

You can ask questions, discuss contributions or suggest ideas!

---

Thank you for your help 🙏  
Every contribution makes this guide more useful for all users 🚀

---

## 💬 Block examples

<div class="alert alert--success">
  <div class="alert-title">🔠 Tip</div>
  If you don't have a 3D printer, I can print the necessary parts for your project.
</div>

<div class="alert alert--warning">
  <div class="alert-title">🧪 Bug / Issue</div>
  If you encounter abnormal behaviour, please specify the firmware version and associated logs.
</div>

### ▶️ 1. Add a YouTube video (recommended)

Use an HTML `<iframe>` tag in your `.md` file:

```html
<div style="text-align: center;">
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>
```

Replace `VIDEO_ID` with the identifier at the end of the YouTube URL:

URL: https://www.youtube.com/watch?v=ABC123XYZ  
ID: `ABC123XYZ`

---

### ▶️ 2. Add a local video

You can also embed a video placed in `static/videos/`:

```html
<video width="640" height="360" controls style="display: block; margin: auto;">
  <source src="/videos/myvideo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

🔧 Expected location:  
Place your `.mp4` file in `static/videos/`

Then use the link `/videos/myvideo.mp4`


# 📦 QReturn QR Generator

Generate secure QR codes with custom links and download them as **images or branded PDFs** using your own custom template.

![Template Preview](./public/qreturn-bg.jpg)

---

## 🚀 Features

- ✅ Generate QR codes from any URL
- 🖼️ Download QR as a high-quality PNG image
- 📄 Export a branded PDF with your QR code placed in a template
- ⚡ Fast and responsive — built with **Vite + React + Tailwind CSS**
- 🧩 Powered by `jsPDF` and `qrcode.react`

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [qrcode.react](https://www.npmjs.com/package/qrcode.react)
- [jsPDF](https://www.npmjs.com/package/jspdf)

---

## 📁 Project Structure

```
qreturn-qr-generator/
├── public/
│   └── qreturn-bg.jpg         # PDF background template
├── src/
│   ├── components/
│   │   └── QRCodeGenerator.jsx
│   └── App.jsx
├── package.json
├── index.html
└── README.md
```

---

## ▶️ How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Qreturn-fyp/demo-qr-pdfGenerator.git
cd qreturn-qr-generator

# 2. Install dependencies
npm install

# 3. Run the app
npm run dev
```

Open your browser at [http://localhost:5173](http://localhost:5173)

---

## 📄 PDF Output Details

- PDF size: A4 (210mm x 297mm)
- QR code is placed in a predefined white box
- Image used: `/public/qreturn-bg.jpg`

You can adjust placement by changing the values here:

```js
pdf.addImage(qrImage, "PNG", x, y, size, size);
```

---

## 📸 Example Usage

1. Enter a URL
2. Click **Generate QR**
3. See the preview
4. Click **Download PNG** or **Generate PDF**

---


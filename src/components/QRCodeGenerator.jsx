import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import jsPDF from "jspdf";

const QRCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [showQR, setShowQR] = useState(false);
  const qrRef = useRef();

  const handleGenerate = () => {
    if (url.trim()) {
      setShowQR(true);
    }
  };

  const handleDownload = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qr-code.png";
    link.click();
  };

  const handleGeneratePDF = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const bgImage = new Image();
    bgImage.src = "/qreturn-pdf-bg.jpeg"; // Make sure this is correct

    bgImage.onload = () => {
      pdf.addImage(bgImage, "JPEG", 0, 0, 210, 297); // A4 size

      // 📍 QR position (tuned for your layout)
      const qrX = 55; // mm from left
      const qrY = 160; // mm from top
      const qrSize = 100;

      pdf.addImage(imgData, "PNG", qrX, qrY, qrSize, qrSize);
      pdf.save("qreturn-qr.pdf");
    };
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter a URL"
        className="border px-4 py-2 rounded-md w-80 shadow"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Generate QR
      </button>

      {showQR && (
        <div className="flex flex-col items-center gap-3 mt-4">
          <div ref={qrRef} className="bg-white p-4 rounded shadow">
            <QRCodeCanvas value={url} size={200} />
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Download PNG
            </button>
            <button
              onClick={handleGeneratePDF}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
            >
              Generate PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;

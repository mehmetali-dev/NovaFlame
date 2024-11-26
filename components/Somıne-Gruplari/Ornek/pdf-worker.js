import { pdfjs } from 'react-pdf';

// Worker dosyasının CDN üzerinden yüklenmesi
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

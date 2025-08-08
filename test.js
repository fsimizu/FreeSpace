import handler from './api/language/[language]/videos.js';

const mockReq = { method: "GET", query: { language: "french" } };
const mockRes = {
  status(code) {
    this.statusCode = code;
    return this;
  },
  json(data) {
    console.log("Response:", this.statusCode, data);
  }
};

handler(mockReq, mockRes);

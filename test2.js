import handler from './api/hello.js';

const mockReq = { method: "GET" };
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

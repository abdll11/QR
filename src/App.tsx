import React from "react";
import { Input, QRCode, Space } from "antd";
import "./app.scss";

function App() {
  const [text, setText] = React.useState("Введите ссылку!");

  return (
    <div className="qr-container">
      <h1>QR by: Badalov ABdullaziz</h1>
      <Space direction="vertical" align="center">
        <QRCode value={text || "-"} size={200} />
        <Input
          placeholder="Enter your link"
          maxLength={60}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Space>
    </div>
  );
}

export default App;
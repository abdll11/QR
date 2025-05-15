import React from "react";
import { Input, QRCode, Space } from "antd";
import "./app.scss"
function App() {
  const [text, setText] = React.useState("ссылку поставь");
  return (
    <>
      <Space direction="vertical" align="center">
        <QRCode value={text || "-"} />
        <Input
          placeholder="-"
          maxLength={60}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Space>
    </>
  );
}

export default App;

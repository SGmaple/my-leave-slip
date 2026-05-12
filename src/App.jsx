function Watermark({ name, studentId }) {
  const marks = [];
  for (let i = 0; i < 20; i++) {
    marks.push(
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${(i % 5) * 20}%`,
          left: `${Math.floor(i / 5) * 25}%`,
          transform: "rotate(-30deg)",
          fontSize: "12px",
          color: "rgba(0,0,0,0.12)",
          whiteSpace: "nowrap",
          lineHeight: "1.8",
          pointerEvents: "none",
        }}
      >
        <div>{name}</div>
        <div>{studentId}</div>
        <div>2026-05-08</div>
      </div>
    );
  }
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      {marks}
    </div>
  );
}


function App() {
  const data = {
    studentId: "202315002259",
    name: "赵若晗",
    destination: "不离校",
    status: "审批通过！",
    startTime: "2026/05/07 08:20",
    endTime: "2026/05/07 16:10",
    leaveType: "病假",
    courses: "英语 合唱与指挥",
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
  `https://my-leave-slip.vercel.app`
)}`;

  return (
    <div style={{
      maxWidth: "400px",
      margin: "0 auto",
      background: "#fff",
      fontFamily: "sans-serif",
      padding: "20px",
      position: "relative",
    }}>

      <Watermark name={data.name} studentId={data.studentId} />

      {/* 标题 */}
      <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      }}>
        <h1>请假单</h1>
        <div>
          <img src={qrUrl} />
          <div>请假二维码</div>
        </div>
      </div>

      {/* 学号 */}
      <div style={{ borderBottom: "1px solid #eee", padding: "12px 0" }}>
        <span style={{ color: "#666" }}>学号：</span>
        <span>{data.studentId}</span>
      </div>

      {/* 姓名 */}
      <div style={{ borderBottom: "1px solid #eee", padding: "12px 0" }}>
        <span style={{ color: "#666" }}>姓名：</span>
        <span>{data.name}</span>
      </div>

      {/* 去向 - 红色大字 */}
      <div style={{ borderBottom: "1px solid #eee", padding: "12px 0" }}>
        <span style={{ color: "#e53935" }}>请假主要去向：</span>
        <span style={{ color: "#e53935", fontSize: "22px", fontWeight: "bold" }}>
          {data.destination}
        </span>
      </div>

      {/* 审批状态 - 红色大字 */}
      <div style={{ borderBottom: "1px solid #eee", padding: "12px 0" }}>
        <span style={{ color: "#666" }}>审批状态：</span>
        <span style={{ color: "#e53935", fontSize: "22px", fontWeight: "bold" }}>
          {data.status}
        </span>
      </div>

      {/* 开始时间 - 蓝色 */}
      <div style={{ borderBottom: "1px solid #eee", padding: "12px 0" }}>
        <span style={{ color: "#666" }}>请假开始时间：</span>
        <span style={{ color: "#1a73e8" }}>{data.startTime}</span>
      </div>

      {/* 结束时间 - 蓝色 */}
      <div style={{ borderBottom: "1px solid #eee", padding: "12px 0" }}>
        <span style={{ color: "#666" }}>请假结束时间：</span>
        <span style={{ color: "#1a73e8" }}>{data.endTime}</span>
      </div>

      {/* 请假类型 */}
      <div style={{ borderBottom: "1px solid #eee", padding: "12px 0" }}>
        <span style={{ color: "#666" }}>请假类型：</span>
        <span>{data.leaveType}</span>
      </div>

      {/* 请假课程 */}
      <div style={{ padding: "12px 0" }}>
        <span style={{ color: "#666" }}>请假课程：</span>
        <span>{data.courses}</span>
      </div>

    </div>
  );
}

export default App;
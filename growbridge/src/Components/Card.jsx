import "./Card.css";

function Card3D() {
  const cardData = [
    { title: "STRATEGY", icon: "◈" },
    { title: "INNOVATION", icon: "✦" },
    { title: "GROWTH", icon: "↗" },
    { title: "BUILD", icon: "✎"},
    { title: "SCALING", icon: "▁▃▆" },
    { title: "KNOWLEDGE", icon: "✦" },
    { title: "CODING", icon: "</>" },
    { title: "SUCCESS", icon:  "✔" },
    { title: "LEARNING", icon: "✧" },
    { title: "ANALYSIS", icon: "⧉" },
  ];

 return (
  <div className="wrapper">
    <h1 className="title">ABOUT</h1>

    <div className="inner" style={{ "--quantity": 10 }}>
      {cardData.map((card, i) => (
        <div
          className="card"
          key={i}
          style={{
            "--index": i,
            "--color-card": getColor(i),
          }}
        >
          <div className="card-content">
            <div className="icon">{card.icon}</div>
            <div className="text">{card.title}</div>
          </div>
        </div>
      ))}
    </div>
    {/* <p className="description">
      We focus on strategy, innovation, and continuous learning to build scalable
      solutions. Our goal is to transform ideas into impactful digital
      experiences through creativity, technology, and growth-driven thinking.
    </p> */}
  </div>
);
}

// helper function for colors
const colors = [
  "142, 249, 252",
  "142, 252, 204",
  "142, 252, 157",
  "215, 252, 142",
  "252, 252, 142",
  "252, 208, 142",
  "252, 142, 142",
  "252, 142, 239",
  "204, 142, 252",
  "142, 202, 252",
];

function getColor(i) {
  return colors[i % colors.length];
}

export default Card3D;
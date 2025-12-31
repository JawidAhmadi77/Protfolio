import React from "react";

function HomeSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#1c1c1c",
        color: "#fff",
      }}
    >
      {/* د عکس placeholder */}
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "#333",
          marginBottom: "30px",
          animation: "pulse 1.5s infinite",
        }}
      />

      {/* د متن placeholder */}
      <div
        style={{
          width: "300px",
          height: "30px",
          backgroundColor: "#333",
          marginBottom: "15px",
          animation: "pulse 1.5s infinite",
        }}
      />
      <div
        style={{
          width: "200px",
          height: "20px",
          backgroundColor: "#333",
          animation: "pulse 1.5s infinite",
        }}
      />

      {/* Pulse animation */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default HomeSkeleton;

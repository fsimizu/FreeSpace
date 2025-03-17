
import './subscribe.css';

export function Subscribe() {

      const channelId = "UCU4sTT9CfScMyP7EHzWvxsw"; // Replace with your actual channel ID
      const subscribeUrl = `https://www.youtube.com/channel/${channelId}?sub_confirmation=1`;
      return (
        <button
          onClick={() => window.open(subscribeUrl, "_blank")}
          style={{
            backgroundColor: "#CDCDCD",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          🔴 Subscribe
        </button>
      );
    };

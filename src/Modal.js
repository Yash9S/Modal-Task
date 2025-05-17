import { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("Speech Settings");
  const [allowInterruptions, setAllowInterruptions] = useState(false);
  const [ambientNoise, setAmbientNoise] = useState(false);
  const [noiseLevel, setNoiseLevel] = useState("Low");
  const [speechSpeed, setSpeechSpeed] = useState("1x");

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>General configuration</h2>
          <p className="modal-subtitle">
            Choose how you'd like to start building your agent.
          </p>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="modal-tabs">
          <button
            className={`tab-button ${
              activeTab === "Speech Settings" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Speech Settings")}
          >
            Speech Settings
          </button>
          <button
            className={`tab-button ${
              activeTab === "Call Settings" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Call Settings")}
          >
            Call Settings
          </button>
          <button
            className={`tab-button ${
              activeTab === "Post Call" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Post Call")}
          >
            Post Call
          </button>
          <button
            className={`tab-button ${
              activeTab === "Chat Widget" ? "active" : ""
            }`}
            onClick={() => setActiveTab("Chat Widget")}
          >
            Chat Widget
          </button>
          <button
            className={`tab-button ${activeTab === "Security" ? "active" : ""}`}
            onClick={() => setActiveTab("Security")}
          >
            Security
          </button>
        </div>

        <div className="modal-content">
          <div className="settings-section">
            <div className="section-header">
              <span className="section-icon">🎙️</span>
              <h3>Speech Settings</h3>
              <button className="expand-button">∧</button>
            </div>

            <div className="section-content">
              <div className="setting-group">
                <h4>Voice selection</h4>
                <div className="voice-selector">
                  <div className="voice-option">
                    <div className="voice-flag">
                      <div className="flag-india"></div>
                    </div>
                    <div className="voice-details">
                      <div className="voice-name">Trisha</div>
                      <div className="accent-tags">
                        <span className="accent-tag">Female</span>
                        <span className="accent-tag">EN</span>
                        <span className="accent-tag">IN</span>
                        <span className="accent-tag">+3</span>
                      </div>
                    </div>
                    <div className="dropdown-icon">▼</div>
                  </div>
                </div>
              </div>

              <div className="setting-group">
                <div className="setting-row">
                  <div className="setting-label">
                    <h4>Allow interruptions</h4>
                    <p className="setting-description">
                      Enable the user to interrupt the agent
                    </p>
                  </div>
                  <div className="toggle-switch">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={allowInterruptions}
                        onChange={() =>
                          setAllowInterruptions(!allowInterruptions)
                        }
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="setting-group">
                <div className="setting-row">
                  <div className="setting-label">
                    <h4>Ambient noise</h4>
                  </div>
                  <div className="toggle-switch">
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={ambientNoise}
                        onChange={() => setAmbientNoise(!ambientNoise)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>

                <div className="noise-level-options">
                  <button
                    className={`noise-level-button ${
                      noiseLevel === "Low" ? "active" : ""
                    }`}
                    onClick={() => setNoiseLevel("Low")}
                  >
                    Low
                  </button>
                  <button
                    className={`noise-level-button ${
                      noiseLevel === "Medium" ? "active" : ""
                    }`}
                    onClick={() => setNoiseLevel("Medium")}
                  >
                    Medium
                  </button>
                  <button
                    className={`noise-level-button ${
                      noiseLevel === "High" ? "active" : ""
                    }`}
                    onClick={() => setNoiseLevel("High")}
                  >
                    High
                  </button>
                </div>
              </div>

              <div className="setting-group">
                <h4>Speech speed</h4>
                <div className="speech-speed-options">
                  <button
                    className={`speed-button ${
                      speechSpeed === "0.25x" ? "active" : ""
                    }`}
                    onClick={() => setSpeechSpeed("0.25x")}
                  >
                    0.25x
                  </button>
                  <button
                    className={`speed-button ${
                      speechSpeed === "0.50x" ? "active" : ""
                    }`}
                    onClick={() => setSpeechSpeed("0.50x")}
                  >
                    0.50x
                  </button>
                  <button
                    className={`speed-button ${
                      speechSpeed === "1x" ? "active" : ""
                    }`}
                    onClick={() => setSpeechSpeed("1x")}
                  >
                    1.0x
                  </button>
                  <button
                    className={`speed-button ${
                      speechSpeed === "1.25x" ? "active" : ""
                    }`}
                    onClick={() => setSpeechSpeed("1.25x")}
                  >
                    1.25x
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="settings-section collapsed">
            <div className="section-header">
              <span className="section-icon">📞</span>
              <h3>Call Settings</h3>
              <button className="expand-button">∨</button>
            </div>
          </div>

          <div className="settings-section collapsed">
            <div className="section-header">
              <span className="section-icon">📋</span>
              <h3>Post Call</h3>
              <button className="expand-button">∨</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

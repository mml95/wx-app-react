import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <a
          href="https://github.com/mml95/wx-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source
        </a>
        <span className="by-footer">by</span>
        <a href="mailto:mml@mml95.dev">MML</a>
      </footer>
    </div>
  );
}

"‘use client"

import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className="title">
        <img src="/img/title.png" alt="설명" width="300px"/> 
      </div>
      <content>
        <div className="info">
          <ul>
            <li className="info-bold">Address</li>
            <li className="info-content">120, Neungdong-ro, Gwangjin-gu, Seoul<br/>Building No. 17</li>
            <li className="info-bold">Insta</li>
            <li className="info-content">@ku_arch</li>
            <li className="info-bold">Mail</li>
            <li className="info-content">cakuarchive@konkuk.ac.kr</li>
            <li className="info-bold">Phone</li>
            <li className="info-content">010-4944-0473</li>
          </ul>
        </div>
        <div className="main-menu">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/about">Archive</a></li>
            <li><a href="/about">Exhibition</a></li>
            <li><a href="/about">Workshop</a></li>
            <li><a href="/about">Magazine</a></li>
          </ul>
        </div>
      </content>
      <div className="footer">
        College of Architecture Konkuk University
      </div>
    </main>
  );
}

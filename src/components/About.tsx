import './About.css';

import { Slider } from '../components/Slider';
import { slides } from '../data/Slide.json';
import Comment from './Comment';
import { useState } from 'react';

export default function About() {
  const [numComments, setNumComments] = useState<number>(0);
  const yourEmail = 'ductung300@gmail.com';

  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = yourEmail;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert('Email copied to clipboard!');
  };
  return (
    <div className="about">
      <div className="skill">
        <h2 className="skill-title">SKILLS</h2>
        <ul className="ul-skill">
          <li>HTML, CSS, JavaScript, Python</li>
          <li>Node (NestJs, NextJs), RESTful API</li>
          <li>PostgreSQL, NoSQL (MongoDB)</li>
          <li>AWS (Lamda, Amplify, S3)</li>
          <li>Testing: Jest</li>
        </ul>

        <h2 className="certificate-title">CERTIFICATE</h2>
        <ul className="ul-certificate">
          <li className="li-cer-main">
            <a
              href="/
          "
            >
              JLPT N3 ( 01-12-2023 )
            </a>
          </li>
          <li> 54/60 reading scores</li>
          <li> Japanese-Language Proficiency Test</li>
        </ul>

        <h2 className="project-title">PROJECTS</h2>
        <ul className="ul-project">
          <li className="li-main">
            <a
              href="
              https://github.com/ductungghub/nest-of-things
          "
            >
              Forum System
            </a>
          </li>
          <li> Tech:Nestjs, PostgreSQL, AWS S3, Docker</li>
          <li> Testing: Jest </li>
        </ul>

        <h2 className="name">Nguyễn Đức Tùng</h2>

        <aside className="aside">
          <h2 className="aside-title">Email:</h2>
          <div className="aside-wrapper">
            <p>{yourEmail}</p>
            <button style={{ background: '#ccc' }} onClick={copyToClipboard}>
              Copy
            </button>
          </div>
        </aside>
        <aside className="soc">
          <div className="soc-title">Social Link</div>
          <nav className="soc-menu">
            <ul className="soc-menu-list">
              <li className="soc-menu-item">
                <a href="https://github.com/ductungghub">Github</a>
              </li>
              <li className="soc-menu-item">
                <a href="https://www.facebook.com/ndtzenbon03">Facebook</a>
              </li>
            </ul>
          </nav>
        </aside>
      </div>

      <div className="about-wrapper">
        <Slider data={slides} />
        <div className="about-content">
          <p>
            Sinh viên năm ba đam mê phát triển web và ngôn ngữ Nhật Bản. Hứng
            thú với cơ hội phát triển và bổ sung văn hóa trong môi trường làm
            việc Nhật Bản. Quan tâm đến kiểm thử phần mềm và các Framework mới.
          </p>

          <p>
            Trong những năm học tại đại học, niềm đam mê của tôi đã tập trung
            vào phát triển web và tiếng Nhật.
          </p>
          <p>
            Tôi tin rằng môi trường làm việc Nhật Bản sẽ mang lại cơ hội tuyệt
            vời để phát triển kỹ năng chuyên môn của mình và đồng thời làm giàu
            thêm kiến thức văn hóa.
          </p>
          <p></p>
        </div>
      </div>

      <div>
        <p> 1月13日</p>
        <Comment setNumComments={setNumComments} />
      </div>
    </div>
  );
}

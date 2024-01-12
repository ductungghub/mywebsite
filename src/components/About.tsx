import './About.css';

import { Slider } from '../components/Slider';
import { slides } from '../data/Slide.json';

export default function About() {
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
          <p>
            Ngoài ra, sở thích của tôi là kiểm thử phần mềm và theo đuổi những
            Framework mới trong phát triển web.
          </p>
          <p></p>
        </div>
      </div>

      <div>1月13日</div>
    </div>
  );
}

import { useState } from 'react';
import Comment from './Comment';
import './Home.css';

function Home() {
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
    <main className="main">
      <div className="sidebar">
        <aside className="question">
          <h2 className="question-title">Email:</h2>
          <div className="q-input-wrapper">
            <p>{yourEmail}</p>
            <button style={{ background: '#ccc' }} onClick={copyToClipboard}>
              Copy
            </button>
          </div>
        </aside>
        <aside className="social">
          <h1 className="social-title">Social Link</h1>
          <nav className="social-menu">
            <ul className="social-menu-list">
              <li className="social-menu-item">
                <a href="/me">Personal page</a>
              </li>
              <li className="social-menu-item">
                <a href="https://github.com/ductungghub">Github</a>
              </li>
              <li className="social-menu-item">
                <a href="https://www.facebook.com/ndtzenbon03">Facebook</a>
              </li>
            </ul>
          </nav>

          <div className="orther">Orther</div>
        </aside>
      </div>
      <div className="primary">
        <div className="mt-60px primary-flex">
          <article className="article">
            <div className="content">
              <img
                src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/417781520_868707881929636_137990656704803815_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=vXiAI-3H4ywAX8uMK4Q&_nc_ht=scontent.fhan2-4.fna&oh=00_AfA0hERFtdpMAT0rQyyl69MxZa7gWfDcoJ57xtaIkWFEew&oe=65A6B72D"
                alt=""
              />
              <div className="post-content">
                <div className="post-main">
                  <h1 className="post-title">
                    Review một ngày đi học kỳ phụ tết ở Haui
                  </h1>
                  <div className="post-meta">
                    <span className="post-date">16/01/2024</span>
                    <span className="who">Admin</span>
                    <span className="comment-link">
                      {numComments || 0} comments
                    </span>
                  </div>

                  <div className="post-detail">
                    <p className="story">
                      {' '}
                      Vậy là, một kỳ học tết mới đã bắt đầu tại Đại học Công
                      nghiệp Hà Nội, mang theo nhiều kỳ vọng và thách thức.
                    </p>
                    <p>
                      Đối với những người học vượt và mong muốn cải thiện, kỳ
                      học này chắc chắn sẽ là một thử thách quan trọng. Với thời
                      gian kéo dài 5 tuần, mọi người sẽ phải nhanh chóng nắm bắt
                      sâu sắc về môn học.
                    </p>

                    <p>
                      Như nhiều người khác, tôi cũng đã đặt chọn lựa của mình
                      vào môn Giải tích. Đây là quyết định không dễ dàng, nhất
                      là khi biết rằng kỳ tết có thời gian ngắn. Tuy nhiên, tôi
                      tin rằng mỗi khối kiến thức mới là một cơ hội để mở rộng
                      tầm hiểu biết và phát triển bản thân. Buổi học đầu tiên
                      của tôi trong kỳ tết diễn ra một cách suôn sẻ hơn dự kiến.
                      Tôi gặp được 3 người bạn mới cùng học, tạo nên một không
                      khí vui vẻ và hỗ trợ. Chúng tôi không quên hỏi nhau về lý
                      do tại sao lại chọn môn Giải tích trong kỳ tết này. Khi
                      đến lượt tôi, tôi đơn giản trả lời rằng tôi học để cải
                      thiện điểm số.
                    </p>
                    <strong className="summary ">Tóm tắt</strong>
                    <p className="summary-detail">
                      Tóm lại, với thời gian học trong kỳ tết ngắn ngủi, mọi
                      người sẽ cần phải đặt nhiều nỗ lực và chăm chỉ hơn so với
                      các kỳ học chính để có thể hiểu sâu và nắm vững kiến thức.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <Comment setNumComments={setNumComments} />
        </div>
      </div>
    </main>
  );
}
export default Home;

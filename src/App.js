import './App.css';
import { Spreadsheet } from 'react-spreadsheet';
function App() {
  const data = [];
  for (let i = 0; i < 25; i++) {
    data.push([{}])
    data[0].push({})
  }

  return (
    <>
      <nav class="navbar">
        <div class="navbar-container container">
            <ul class="menu-items">
              <li><a href="#">Post</a></li>
            </ul>
            <img src="./img1.jpeg" />
        </div>
      </nav>

      <Spreadsheet data={data} />;
    </>
  );
}

export default App;
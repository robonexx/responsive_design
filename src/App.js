import './App.scss';

function App() {
  return (
    <div className='App'>
      <header>
        <h2>HEADER LOGO</h2>
      </header>
      <nav>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>page</a>
          </li>
        </ul>
      </nav>
      <div className='app-top'>
        <h1>Responsiveness and design library</h1>

        <h2>Learning as I go reading thru blogs and also Udemy courses</h2>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dolor
          doloribus, saepe vel repellendus optio omnis culpa. Doloremque itaque
          commodi facere, libero atque quos! Amet deleniti accusamus placeat
          ipsam dolorum quis eum quisquam harum, error, obcaecati earum voluptas
          magnam dolores!
        </p>
      </div>
      <div className='app-bottom'>
        <div className='bottom-left'>Left</div>
        <div className='bottom-right'>Right</div>
      </div>
    </div>
  );
}

export default App;

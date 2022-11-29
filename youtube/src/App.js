import Navbar from "./Components/Navbar/index";
import Sidebar from "./Components/Sidebar/index";
import Topics from "./Components/Topics/index";
import Kontent from "./Components/Cntent/index";
import Shorts from "./Components/Shorts/index";

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        <div>
          {/* Topics */}
          <Topics />
          {/* Kontent */}
          <Kontent />
          {/* Shorts */}
        </div>
      </div>
      <Shorts />
    </div>
  );
}

export default App;

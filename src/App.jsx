import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import DefaultScreen from "./components/DefaultScreen";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <Main />
      </main>
    </>
  );
}

export default App;

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar />
        <div className="mt-24 text-center w-2/3"></div>
      </main>
    </>
  );
}

export default App;

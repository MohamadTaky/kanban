import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
	return (
		<div className="grid grid-cols-[auto_1fr] text-white">
			<Sidebar />
			<Header />
		</div>
	);
}

export default App;

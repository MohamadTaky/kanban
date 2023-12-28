import { FolderKanbanIcon, SunIcon, MoonIcon, EyeOffIcon } from "lucide-react";

export default function Sidebar() {
	return (
		<nav className="bg-slate-700 border-slate-600 w-full max-w-xs p-4 flex flex-col h-screen text-white border-r-2">
			<div className="flex gap-4 items-center mb-4">
				<div className="w-8 h-8 bg-indigo-500" />
				<h1 className="text-xl font-bold">Kanban</h1>
			</div>
			<h2 className="text-gray-400">ALL BOARDS (3)</h2>
			<ul className="text-gray-400">
				<li className="flex gap-4 items-center p-2">
					<FolderKanbanIcon size={28} />
					Platform Launch
				</li>
				<li className="flex gap-4 items-center p-2">
					<FolderKanbanIcon size={28} />
					Platform Launch
				</li>
				<li className="flex gap-4 items-center p-2">
					<FolderKanbanIcon size={28} />
					Platform Launch
				</li>
			</ul>
			<button className="flex gap-4 items-center text-indigo-600 p-2">
				<FolderKanbanIcon size={28} />
				+Create new board
			</button>
			<div className="flex justify-between mx-4 bg-slate-800 p-4 mt-auto">
				<SunIcon />
				<button className="w-12 h-6 rounded-full bg-indigo-600">
					<div className="w-6 h-6 bg-white rounded-full" />
				</button>
				<MoonIcon />
			</div>
			<button className="flex gap-4 p-4 text-gray-400 items-center">
				<EyeOffIcon />
				Hide Sidebar
			</button>
		</nav>
	);
}

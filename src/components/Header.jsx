import { DotIcon } from "lucide-react";

export default function Header() {
	return (
		<div className="flex h-fit items-center p-4 py-8 bg-slate-700 border-slate-600 border-b-2">
			<h2 className="text-xl font-bold">Platfom Launch</h2>
			<button className="ml-auto mr-4 bg-indigo-500 px-6 py-2 rounded-full">+ Add New Task</button>
			<button className="text-gray-400">
				<DotIcon size={8} strokeWidth="50%" />
				<DotIcon size={8} strokeWidth="50%" />
				<DotIcon size={8} strokeWidth="50%" />
			</button>
		</div>
	);
}

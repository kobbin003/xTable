import { useState } from "react";
import "./App.css";
import { data } from "./data/data";

function App() {
	const [sortedData, setSortedData] = useState(data);

	const handleSortByViews = () => {
		setSortedData((prev) => {
			return [
				...prev.sort((a, b) => {
					return b.views - a.views; // descending order
				}),
			];
		});
	};

	const handleSortBydate = () => {
		setSortedData((prev) => {
			return [
				...prev.sort((a, b) => {
					return new Date(b.date) - new Date(a.date); // descending order
				}),
			];
		});
	};

	return (
		<>
			<div>
				<button onClick={handleSortBydate}>Sort by Date</button>
				<button onClick={handleSortByViews}>Sort by Views</button>
			</div>
			<table>
				<thead>
					<tr>
						<th>Date</th>
						<th>Views</th>
						<th>Country</th>
					</tr>
				</thead>
				<tbody>
					{sortedData.map(({ date, views, article }, index) => (
						<tr key={index}>
							<td>{date}</td>
							<td>{views}</td>
							<td>{article}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default App;

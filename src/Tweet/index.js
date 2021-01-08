import React from "react";
import Button from "@material-ui/core/Button";

const Tweet = () => {
	const handleEdit = () => {
		console.log("Edit");
	};

	const handleDelete = () => {
		console.log("Delete");
	};

	return (
		<div className="border p-3 hover:bg-gray-100">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row content-center justify-center">
					<div className="font-bold break-all">
						0x6765e622BDe325Ebc480fD3549097bfA76D3266A
					</div>
					<div className="px-1">·</div>
					<div className="text-gray-600">5 min</div>
				</div>
			</div>
			<div className="mt-2">Content of my tweet</div>
			<div className="flex flex-row justify-end mt-2">
				<Button variant="contained" onClick={handleEdit}>
					Edit
				</Button>
				<Button variant="contained" onClick={handleDelete}>
					Delete
				</Button>
			</div>
		</div>
	);
};

export default Tweet;

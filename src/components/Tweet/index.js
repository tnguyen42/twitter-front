import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Tweet = ({ author, content, timestamp, id, account }) => {
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
					<div className="font-bold break-all">{author}</div>
					<div className="px-1">·</div>
					<div className="text-gray-600">{timestamp}</div>
				</div>
			</div>
			<div className="mt-2">{content}</div>
			{author == account && (
				<div className="flex flex-row justify-end mt-2">
					<Button variant="contained" onClick={handleEdit}>
						Edit
					</Button>
					<Button variant="contained" onClick={handleDelete}>
						Delete
					</Button>
				</div>
			)}
		</div>
	);
};

export default Tweet;

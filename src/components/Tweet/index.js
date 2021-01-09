import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

import smartContract from "services/smartContract.js";
import { web3 } from "services/smartContract";

const moment = require("moment");

const Tweet = ({ author, content, timestamp, id, account }) => {
	const handleEdit = () => {
		console.log("Edit", id);
	};

	const handleDelete = async () => {
		console.log("Delete", id);
		try {
			const userAccount = await web3.eth.getAccounts();
			smartContract.methods
				.deleteTweet(id)
				.send({ from: userAccount[0] });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="border p-3 hover:bg-gray-100">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row content-center justify-center">
					<div className="font-bold break-all">{author}</div>
					<div className="px-1">·</div>
					<div className="text-gray-600">
						{moment.unix(timestamp).fromNow()}
					</div>
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

Tweet.propTypes = {
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	timestamp: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	account: PropTypes.string.isRequired,
};

export default Tweet;

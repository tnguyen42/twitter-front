import React, { useState } from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import smartContract from "services/smartContract.js";
import { web3 } from "services/smartContract";

const moment = require("moment");

const Tweet = ({ author, content, timestamp, id, account }) => {
	const [edit, setEdit] = useState(false);
	const [tweet, setTweet] = useState("");
	const [error, setError] = useState(null);

	const handleEdit = () => {
		if (!edit) {
			setEdit(true);
		} else {
			setEdit(false);
		}
	};

	const handleDelete = async () => {
		try {
			const userAccount = await web3.eth.getAccounts();
			smartContract.methods
				.deleteTweet(id)
				.send({ from: userAccount[0] });
		} catch (error) {
			setError("Something went wrong. Please try again.");
		}
	};

	const handleChange = (event) => {
		setTweet(event.target.value);
	};

	const handleSubmit = async () => {
		const userAccount = await web3.eth.getAccounts();
		smartContract.methods
			.updateTweet(id, tweet)
			.send({ from: userAccount[0] })
			.then(() => {
				setEdit(false);
			});
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
			{edit && (
				<form
					noValidate
					autoComplete="off"
					className="w-full flex justify-between mt-3"
					onSubmit={(event) => {
						event.preventDefault();
						handleSubmit(tweet);
					}}
				>
					<div className="w-4/6 pr-1">
						<TextField
							id="outlined-basic"
							label="Your updated tweet"
							variant="outlined"
							className="w-full"
							multiline
							onChange={handleChange}
						/>
					</div>
					<div className="pl-1 w-1/6 h-14">
						<Button
							variant="contained"
							className="w-full h-full"
							onClick={() => {
								setEdit(false);
							}}
						>
							Cancel
						</Button>
					</div>
					<div className="pl-1 w-1/6 h-14">
						<Button
							variant="contained"
							color="primary"
							className="w-full h-full"
							type="submit"
						>
							Update
						</Button>
					</div>
				</form>
			)}
			{author == account && (
				<div className="flex flex-row justify-end mt-2">
					<Button
						variant="contained"
						onClick={handleEdit}
						disabled={edit}
					>
						Edit
					</Button>
					<Button variant="contained" onClick={handleDelete}>
						Delete
					</Button>
				</div>
			)}
			{error && <div className="text-red-600 font-bold">{error}</div>}
		</div>
	);
};

Tweet.propTypes = {
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	timestamp: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	account: PropTypes.string,
};

export default Tweet;

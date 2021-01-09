import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import smartContract from "services/smartContract.js";
import { web3 } from "services/smartContract";
import Web3 from "web3";

const Header = () => {
	const [tweet, setTweet] = useState("");
	const [error, setError] = useState(null);

	const handleChange = (event) => {
		setTweet(event.target.value);
	};

	const handleSubmit = async (tweet) => {
		let accounts;

		// if (window.ethereum) {
		// 	try {
		// 		// Request account access if needed
		// 		accounts = window.ethereum.sendAsync("eth_requestAccounts");
		// 		// eslint-disable-next-line no-console
		// 		console.log("Metamask enabled", accounts);
		// 		setError(null);
		// 	} catch (error) {
		// 		setError("Unable to connect to Metamask");
		// 	}
		// }

		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			window.ethereum.enable();
			accounts = true;
		}

		if (accounts) {
			const userAccount = await web3.eth.getAccounts();
			smartContract.methods
				.createTweet(tweet)
				.send({ from: userAccount[0] });
			setError(null);
		} else {
			setError("You are not connected to Metamask");
		}
	};

	return (
		<div>
			<form
				noValidate
				autoComplete="off"
				className="w-full flex justify-between mt-3"
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit(tweet);
				}}
			>
				<div className="w-5/6 pr-1">
					<TextField
						id="outlined-basic"
						label="Your tweet"
						variant="outlined"
						className="w-full"
						multiline
						onChange={handleChange}
					/>
				</div>
				<div className="pl-1 w-1/6 h-14">
					<Button
						variant="contained"
						color="primary"
						className="w-full h-full"
						type="submit"
					>
						Tweet
					</Button>
				</div>
			</form>
			{error && <div className="text-red-600 font-bold">{error}</div>}
		</div>
	);
};

export default Header;

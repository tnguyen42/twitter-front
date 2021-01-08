import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import smartContract from "services/smartContract.js";
import { web3 } from "services/smartContract";

const Header = () => {
	const [tweet, setTweet] = useState("");
	const [metamask, setMetamask] = useState(false);

	const handleChange = (event) => {
		setTweet(event.target.value);
	};

	const handleSubmit = async (tweet) => {
		const userAccount = await web3.eth.getAccounts();
		smartContract.methods.createTweet(tweet).send({ from: userAccount[0] });
	};

	const enableMetamask = async () => {
		try {
			// Request account access if needed
			const accounts = await window.ethereum.send("eth_requestAccounts");
			setMetamask(true);
			console.log("Metamask enabled", accounts);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="mt-10">
			<Button
				variant="contained"
				className="w-full"
				onClick={enableMetamask}
				disabled={metamask}
			>
				Allow Metamask
			</Button>
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
		</div>
	);
};

export default Header;

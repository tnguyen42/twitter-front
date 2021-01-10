import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import smartContract from "services/smartContract.js";

const Header = () => {
	const [tweet, setTweet] = useState("");
	const [error, setError] = useState(null);
	const [currentAccount, setCurrentAccount] = useState(null);

	const handleChange = (event) => {
		setTweet(event.target.value);
	};

	useEffect(() => {
		if (window.ethereum) {
			window.ethereum
				.request({ method: "eth_accounts" })
				.then(handleAccountsChanged)
				.catch((err) => {
					// eslint-disable-next-line no-console
					console.error(err);
				});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleAccountsChanged = (accounts) => {
		if (accounts.length === 0) {
			setError("Please connect to Metamask");
			setCurrentAccount(null);
		} else if (accounts[0] !== currentAccount) {
			setCurrentAccount(accounts[0]);
		}
	};

	const enableMetamask = async () => {
		if (window.ethereum) {
			window.ethereum
				.request({ method: "eth_requestAccounts" })
				.then((response) => {
					handleAccountsChanged(response);
					setError(null);
				})
				.catch((err) => {
					if (err.code === 40001) {
						setError("Please connect to Metamask");
					} else {
						setError(err);
					}
				});
		}
	};

	const handleSubmit = async (tweet) => {
		smartContract.methods.createTweet(tweet).send({ from: currentAccount });
		setError(null);
	};

	return (
		<div>
			<Button
				variant="contained"
				className="w-full"
				onClick={enableMetamask}
				disabled={currentAccount !== null}
			>
				Enable Metamask
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
						disabled={currentAccount === null}
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

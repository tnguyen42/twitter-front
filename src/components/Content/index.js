import React, { useState, useEffect } from "react";
import smartContract from "services/smartContract.js";
import { web3 } from "services/smartContract";

import Tweet from "components/Tweet";

const Content = () => {
	const [account, setAccount] = useState("");
	const [tweets, setTweets] = useState([]);

	const updateTweets = (response) => {
		let newTweets = [];
		for (let i = 0; i < response[0].length; i++) {
			newTweets.push({
				author: response[0][i],
				content: response[1][i],
				timestamp: response[2][i],
				id: response[3][i],
			});
		}
		// console.log(newTweets);
		setTweets(newTweets);
	};

	useEffect(() => {
		web3.eth.getAccounts().then(setAccount);
	}, []);

	useEffect(() => {
		smartContract.methods.getTweets().call().then(updateTweets);
	}, []);

	return (
		<div className="mt-6">
			{tweets.map((tweet) => {
				return (
					<Tweet
						key={tweet.id}
						author={tweet.author}
						content={tweet.content}
						timestamp={tweet.timestamp}
						id={tweet.id}
						account={account[0]}
					/>
				);
			})}
		</div>
	);
};

export default Content;

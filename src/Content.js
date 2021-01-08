import React from "react";
import Tweet from "src/Tweet";

const Content = () => {
	const tweets = ["Tweet1", "Tweet2"];

	return (
		<div className="mt-6">
			{tweets.map((tweet) => {
				return <Tweet key={tweet} />;
			})}
		</div>
	);
};

export default Content;

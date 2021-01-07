import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Header = () => {
	const [tweet, setTweet] = useState("");

	const handleChange = (event) => {
		setTweet(event.target.value);
	};

	const handleSubmit = (tweet) => {
		console.log(tweet);
	};

	return (
		<div className="mt-10">
			<form
				noValidate
				autoComplete="off"
				className="w-full flex justify-between"
				onSubmit={(event) => {
					event.preventDefault();
					handleSubmit(tweet);
				}}
			>
				<TextField
					id="outlined-basic"
					label="Your tweet"
					variant="outlined"
					multiline
					className="w-4/6"
					onChange={handleChange}
				/>
				<Button
					variant="contained"
					color="primary"
					className="pl-2 w-1/6 h-14"
					type="submit"
				>
					Tweet
				</Button>
			</form>
		</div>
	);
};

export default Header;

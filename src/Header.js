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

import React from "react";
import Header from "src/Header";
import Content from "src/Content";

function App() {
	return (
		<div className="overflow-x-hidden">
			<div className="flex flex-col max-w-sm sm:max-w-md md:max-w-3xl ml-auto mr-auto">
				<Header />
				<Content />
			</div>
		</div>
	);
}

export default App;

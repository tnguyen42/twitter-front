import React from "react";
import Header from "components/Header";
import Content from "components/Content";

function App() {
	return (
		<div className="overflow-x-hidden">
			<div className="flex flex-col max-w-sm sm:max-w-md md:max-w-3xl ml-auto mr-auto my-10">
				<Header />
				<Content />
			</div>
		</div>
	);
}

export default App;

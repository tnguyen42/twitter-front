import abi from "./abi";

let Web3 = require("web3");
export const address = "0x8EF8Ea48B2d01877Dde3111289567CaFFE4fceF6";

export const web3 = new Web3(
	window.ethereum ||
		new Web3.providers.WebsocketProvider(
			"wss://ropsten.infura.io/ws/v3/c408acc6d32941a496920461a9c1335f"
		)
);

const smartContract = new web3.eth.Contract(abi, address);

export default smartContract;

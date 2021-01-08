import abi from "./abi";

let Web3 = require("web3");
const address = "0xBA50Dd0EE532Ce1fc23CBc5d685DBbD1b3a7A0A6";

export const web3 = new Web3(
	window.ethereum ||
		new Web3.providers.WebsocketProvider(
			"wss://ropsten.infura.io/ws/v3/c408acc6d32941a496920461a9c1335f"
		)
);

const smartContract = new web3.eth.Contract(abi, address);

export default smartContract;

const abi = [
	{
		inputs: [
			{
				internalType: "string",
				name: "_content",
				type: "string",
			},
		],
		name: "createTweet",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256",
			},
		],
		name: "getTweet",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
			{
				internalType: "string",
				name: "",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getTweets",
		outputs: [
			{
				internalType: "address[]",
				name: "",
				type: "address[]",
			},
			{
				internalType: "string[]",
				name: "",
				type: "string[]",
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]",
			},
			{
				internalType: "uint256[]",
				name: "",
				type: "uint256[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "_newContent",
				type: "string",
			},
		],
		name: "updateTweet",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_id",
				type: "uint256",
			},
		],
		name: "deleteTweet",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

export default abi;

import axios from 'axios';

import { transfersActions } from '../slices/transfers.slice';

const API_URL = 'http://localhost:4000/api/v1';

export const getUsersTransfers = userId => {
	return async dispatch => {
		try {
			// API REQUEST
			dispatch(transfersActions.getTransfers());
		} catch (error) {
			console.log(error);
		}
	};
};

export const newTransfer = (accountNumber, amount) => {
	return async dispatch => {
		const accountNumberSent = localStorage.getItem('accountNumber')
		try {
			const res = await axios.post(`${API_URL}/transfers`, {
				accountNumberSent,
				accountNumberReceiver: accountNumber,
				amountTransfer: amount
			})

			console.log(res)

			dispatch(transfersActions.newTransfer());
		} catch (error) {
			console.log(error);
		}
	};
};

import { Actions, Screens } from '../types/store';
import { getInfo } from '../services/firebase';


export const navigate = (screen: Screens) => {
	return {
		action: Actions.NAVIGATE,
		payload: screen,
	};
};

export const getProductsAction = async () => {
	const products = await getInfo(); //Firestore
	return {
		action: Actions.GETPRODUCTS,
		payload: products,
	};
};
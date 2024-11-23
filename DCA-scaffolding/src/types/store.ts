export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	userscreen: string;
	products: any[];
	currentProduct: {  
        id: string | null;
        deleteevent: string;
        createeventt: string;
       
    } | null;
	
	
	
};

export enum Screens {
	'ADMIN' = 'ADMIN',
	'USERR' = 'USERR',
	
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'GETPRODUCTS' = 'GETPRODUCTS',
}
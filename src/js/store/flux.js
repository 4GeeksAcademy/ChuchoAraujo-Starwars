const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			tacoSeleccionado: {}
			
		},
		actions: {
			seleccionarTaco: (taco) => {
				setStore({tacoSeleccionado: taco})
				console.log(getStore().tacoSeleccionado)
			}
		}
	};
};

export default getState;

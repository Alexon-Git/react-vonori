import CardCloth from "./CardCloth";
import CardSnik from "./CardSnik";

function Product() {
	return (
		<>
			<div className="choice d-flex w100p mt-10">
				<div className="open"><p>Кроссовки</p></div>
				<div className="close"><p>Одежда</p></div>
			</div>
			<div className="d-flex justify-between align-center">
				<h1>Кроссовки</h1>
				<img width={25} height={25} src="/img/filter.svg" alt="Filters" />
			</div>
			<div className="product">
				{/* <CardCloth/>
				<CardCloth/>
				<CardCloth/>
				<CardCloth/>
				<CardCloth/>
				<CardCloth/>
				<CardCloth/>
				<CardCloth/> */}

				
				<CardSnik />
				<CardSnik />
				<CardSnik />
				<CardSnik /> 
				<CardSnik />
				<CardSnik />
				<CardSnik />
				<CardSnik />
				<CardSnik />
				<CardSnik />
			</div>
		</>
	)
};

export default Product;
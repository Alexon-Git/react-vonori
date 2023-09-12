import Headers from "./Header";
import Product from "./Product";


function Home() {
	return (
		<div className="wrapper clear">
			<Headers/>
			<div className="search p-0 w100p mt-15 d-flex align-center">
				<img className="ml-10 align-center" width={18} height={18} src="/img/search.svg" />
				<input className="ml-5 mr-10 w100p pt-5 pb-5" placeholder="Поиск" style={{ fontSize: '15px' }} alt="Search" />
			</div>
			<Product/>
		</div>
	);
}

export default Home;
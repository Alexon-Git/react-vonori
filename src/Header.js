

function Header() {
	return (

		<>
			<div className="wrapper clear">
				<header className="d-flex justify-between align-center ">
					<div className="d-flex align-center">
						<img className="logo" width={30} height={30} src="./img/logo.jpg" />
						<h3 className="pl-10">ALEX</h3>
					</div>
					<div className="d-flex ">
						<img width={25} height={25} src="/img/heart.svg" />
					</div>
				</header>

				<div className="helper">
					<div className="search p-0 w100p mt-15 d-flex align-center">
						<img className="ml-10 align-center" width={18} height={18} src="/img/search.svg" />
						<input className="ml-5 mr-10 w100p pt-5 pb-5" placeholder="Поиск" style={{ fontSize: '15px' }} />
					</div>
					<div className="choice d-flex w100p mt-10">
						<div className="open"><p>Кроссовки</p></div>
						<div className="close"><p>Одежда</p></div>
					</div>
					<div className="d-flex justify-between align-center">
						<h1>Кроссовки</h1>
						<img width={25} height={25} src="/img/filter.svg" />
					</div>
				</div>

				<div className="product">

					<div className="card d-blokc w100p h100p">
						<img className="" src="./img/photo_1.jpg" />
						<div className="footer-card">
							<div className="d-flex pt-5 justify-between align-center">
								<span><b>9 999</b> ₽</span>
								<button className="mark d-flex align-center">
									<img width={15} height={15} src="/img/heart.svg" />
								</button>
							</div>
							<p className="title-card">Adidas Ozzelia</p>
							<button className="buy d-flex w100p  "><p>Купить</p></button>
						</div>
					</div>
					<div className="card d-blokc w100p h100p">
						<img className="" src="./img/photo_1.jpg" />
						<div className="footer-card">
							<div className="d-flex pt-5 justify-between align-center">
								<span><b>9 999</b> ₽</span>
								<button className="mark d-flex align-center">
									<img width={15} height={15} src="/img/heart.svg" />
								</button>
							</div>
							<p className="title-card">Adidas Ozzelia</p>
							<button className="buy d-flex w100p  "><p>Купить</p></button>
						</div>
					</div>
					<div className="card d-blokc w100p h100p">
						<img className="" src="./img/photo_1.jpg" />
						<div className="footer-card">
							<div className="d-flex pt-5 justify-between align-center">
								<span><b>9 999</b> ₽</span>
								<button className="mark d-flex align-center">
									<img width={15} height={15} src="/img/heart.svg" />
								</button>
							</div>
							<p className="title-card">Adidas Ozzelia</p>
							<button className="buy d-flex w100p  "><p>Купить</p></button>
						</div>
					</div>
					<div className="card d-blokc w100p h100p">
						<img className="" src="./img/photo_1.jpg" />
						<div className="footer-card">
							<div className="d-flex pt-5 justify-between align-center">
								<span><b>9 999</b> ₽</span>
								<button className="mark d-flex align-center">
									<img width={15} height={15} src="/img/heart.svg" />
								</button>
							</div>
							<p className="title-card">Adidas Ozzelia</p>
							<button className="buy d-flex w100p  "><p>Купить</p></button>
						</div>
					</div>
					<div className="card d-blokc w100p h100p">
						<img className="" src="./img/photo_1.jpg" />
						<div className="footer-card">
							<div className="d-flex pt-5 justify-between align-center">
								<span><b>9 999</b> ₽</span>
								<button className="mark d-flex align-center">
									<img width={15} height={15} src="/img/heart.svg" />
								</button>
							</div>
							<p className="title-card">Adidas Ozzelia</p>
							<button className="buy d-flex w100p  "><p>Купить</p></button>
						</div>
					</div>




				</div>
			</div>

		</>

	);
}

export default Header;
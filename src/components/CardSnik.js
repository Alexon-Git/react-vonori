function CardSnik() {
	return (
		
		<div className="card d-blokc w100p h100p">
			<img className="" src="./img/photo_1.jpg" alt="Product" />
			<div className="footer-card">
				<div className="d-flex pt-5 justify-between align-center">
					<span><b>9 999</b> ₽</span>
					<button className="mark d-flex align-center">
						<img width={15} height={15} src="/img/heart.svg" alt="Like" />
					</button>
				</div>
				<p className="title-card">Adidas Ozzelia</p>
				<button className="buy d-flex w100p  "><p>Купить</p></button>
			</div>
		</div>
	);
}

export default CardSnik;
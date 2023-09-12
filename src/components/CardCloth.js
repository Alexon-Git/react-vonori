function CardCloth() {
	return (
		
		<div className="card d-blokc w100p h100p">
			<img className="" src="./img/photo_4.jpg" alt="product"/>
			<div className="footer-card">
				<div className="d-flex pt-5 justify-between align-center">
					<span><b>9 999</b> ₽</span>
					<button className="mark d-flex align-center">
						<img width={15} height={15} src="/img/heart.svg" alt="Like"/>
					</button>
				</div>
				<p className="title-card">Куртка TNF</p>
				<button className="buy d-flex w100p  "><p>Купить</p></button>
			</div>
		</div>
	)
};

export default CardCloth;
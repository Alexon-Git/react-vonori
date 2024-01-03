function Profile() {
	return (
		<div className="wrapper" >
			<div>
				<h1>Профиль</h1>
			</div>

			<div className="d-flex justify-center align-center">
				<div className="user d-flex justify-center align-center" >
					<img width={80} height={80} src="./img/logo.jpg" />
					<h3>|Alexon|</h3>
				</div>
			</div>

			<div className="info">
				<div className="block-left ">
					<div className="pay pt-5 pl-10 pb-10 pr-10">
						<h4>Способ оплаты</h4>
					</div>
					<div className="deliveri pt-5 pl-10 pb-10 pr-10">
						<h4>Доставки</h4>
					</div>
				</div>

				<div className="block-right pt-5 pl-10 pb-10 pr-10">
					<h4 className="">Данные доставки</h4>
					<h4 className="">Данные доставки</h4>
					<button className="buy d-flex w100p "><p>Редактировать</p></button>
				</div>
			</div>

		</div>
	);
}

export default Profile;

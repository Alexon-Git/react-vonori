function Headers() {
	return (
		<header className="d-flex justify-between align-center ">
			<div className="d-flex align-center">
				<img className="logo" width={30} height={30} src="./img/logo.jpg"  alt="Logo"/>
				<h3 className="pl-10">ALEX</h3>
			</div>
			<div className="d-flex ">
				<img width={25} height={25} src="/img/heart.svg" alt="Heart"/>
			</div>
		</header>
	)
}

export default Headers;

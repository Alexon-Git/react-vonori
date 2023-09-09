
function App() {
  return (
    <div className="wrapper">
			<header>
			<div className="headerLeft">
				<img src="" alt=""/>
				<h3>имя пользователя</h3>
			</div>
			<svg className="favourites"></svg>
			</header>

			<div className="info">
				<form className="search">
  				<input type="search"/>
  				<input type="submit" value="Найти"/>
				</form>
			<ul className="product">
				<li id="kros">Кроссовки</li>
				<li id="ode">Одежда</li>
			</ul>
			<ul className="stroca">
				<li className="open">_______</li>
				<li className="open">_______</li>
			</ul>
			</div>
			
			<div className="content">
				<h1>Кроссовки</h1>
			</div>
		</div>
  );
}

export default App;

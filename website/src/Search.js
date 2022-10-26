import './css/Search.css';

export default function Search() {
	return (
		<>
			<body>
				<form class='search-container'>
					<input type='text' id='search-bar' placeholder='What can I help you with today?' />
					<a href='#'>
						<img
							class='search-icon'
							src='http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png'
						/>
					</a>
				</form>
			</body>
		</>
	);
}

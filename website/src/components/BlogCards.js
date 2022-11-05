import "../css/BlogCards.css";

export default function BlogCard(post) {
	return (
		<div className='card'>
			<div className='card_img'>
				<div className='card_body'>
					<h2 className='card_title'>{post.title}</h2>
					<p className='card_summary'>summary</p>
					<p className='card_author'>{post.Author}</p>
					<button>Read More</button>
				</div>
			</div>
		</div>
	);
}

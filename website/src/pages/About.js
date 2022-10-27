import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';
import { useState, useEffect } from 'react';

export default function About() {
	const [usersList, setUsersList] = useState([]);
	const usersCollectionRef = collection(db, 'users');

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			setUsersList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	});

	return (
		<div>
			{usersList.map((user) => {
				return (
					<>
						<div>{user.name}</div>
						<div>{user.Age}</div>
					</>
				);
			})}
		</div>
	);
}

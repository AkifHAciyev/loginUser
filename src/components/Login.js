import React, { useState } from 'react';
import './login.css';

const Login = () => {
	const [passVissible, setPassVissible] = useState(true);
	const [myUser, setMyUser] = useState({ name: '', password: '', email: '' });

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setMyUser({
			...myUser,
			[name]: value,
		});
	};

	return (
		<>
			<header>
				<button
					onClick={() => {
						setPassVissible((prevpassVissible) => !prevpassVissible);
					}}
				>
					login
				</button>
			</header>
			{!passVissible && <h1>Your name is {myUser.name}</h1>}
			{passVissible && (
				<div className="wrapper">
					<h2>add user</h2>
					<input value={myUser.name} name="name" onChange={handleChange} type="text" placeholder="name" />
					<input value={myUser.email} name="email" onChange={handleChange} type="text" placeholder="email" />
					<input value={myUser.password} name="password" onChange={handleChange} type="text" placeholder="password" />
					<button
						onClick={() => {
							setPassVissible((prevpassVissible) => !prevpassVissible);
						}}
					>
						login User
					</button>
				</div>
			)}
		</>
	);
};

export default Login;

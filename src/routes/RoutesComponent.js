import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from '../views/LoginScreen/LoginScreen';
import Dashboard from '../views/Dashboard/Dashboard';
import MyProfile from '../views/Account/MyProfile';

export default function RoutesComponent() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginScreen />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/profile" element={<MyProfile/>} />
			</Routes>
		</BrowserRouter>
	)
}
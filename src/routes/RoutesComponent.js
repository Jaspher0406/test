import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginScreen from '../views/LoginScreen/LoginScreen';
import Dashboard from '../views/Dashboard';

export default function RoutesComponent() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginScreen />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}
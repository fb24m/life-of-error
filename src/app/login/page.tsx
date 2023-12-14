'use client'

import { Box, Button, Dialog, DialogContent, TextField } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import styles from './page.module.scss'
import { login } from "@/services/Database/login"
import { useFormState } from "react-dom"

const TextFieldStyle = {
	width: '100%'
}

const initialState = {
	message: null,
}

const Login = () => {
	// @ts-expect-error
	const [state, loginAction] = useFormState(login, initialState);

	console.log(state)

	return (
		<div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<form action={loginAction}>
					<Box rowGap={1} display="flex" flexDirection="column">
						<TextField name="username" style={TextFieldStyle} label="Как вас назвали ваши родители (только латиница)?" />
						<TextField name="birth-date" style={TextFieldStyle} label="Когда вас назвали ваши родители?" />
						<TextField type="password" name="password-a" autoComplete="off" style={TextFieldStyle} label="Пароль придумай" />
						<TextField type="password" name="password-b" autoComplete="off" style={TextFieldStyle} label="Пароль подтверди" />
						<TextField type="password" name="password-c" autoComplete="off" style={TextFieldStyle} label="Пароль подтверди" />
						<TextField type="password" name="password-d" autoComplete="off" style={TextFieldStyle} label="Пароль подтверди" />
						<TextField type="password" name="password-e" autoComplete="off" style={TextFieldStyle} label="Пароль подтверди" />
						<TextField type="password" name="password-f" autoComplete="off" style={TextFieldStyle} label="Пароль подтверди" />
						<Button type="submit" variant="contained">Кнопка</Button>
					</Box>
				</form>
				<Dialog open={(state.message !== null)} >
					<DialogContent>{state.message}</DialogContent>
				</Dialog>
			</LocalizationProvider>
		</div>
	)
}

export default Login
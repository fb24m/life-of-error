'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const login = async (prevState: any, formData: FormData) => {
	if (Math.floor(Math.random() * 5) !== 1) {
		const rawData = {
			passwordA: formData.get('password-a')! as string,
			passwordB: formData.get('password-b') as string,
			passwordC: formData.get('password-c') as string,
			passwordD: formData.get('password-d') as string,
			passwordE: formData.get('password-e') as string,
			passwordF: formData.get('password-f') as string,
			username: formData.get('username')! as string,
			birthDate: formData.get('birth-date')! as string,
		}

		console.log(rawData)

		if (rawData.passwordA !== rawData.passwordB ||
			rawData.passwordA !== rawData.passwordC ||
			rawData.passwordA !== rawData.passwordD ||
			rawData.passwordA !== rawData.passwordE ||
			rawData.passwordA !== rawData.passwordF) {

			return { ok: false, message: 'Переделывай давай пароль не савпал' }
		}

		if (!rawData.passwordA.includes('.')) return { ok: false, message: 'В ПАРОЛЕ АБЯЗАТЕЛЬНА ТОЧКУ НАДА БЕЗАПАСНАСТЬ' }
		if (!rawData.passwordA.includes(',')) return { ok: false, message: 'ДЛЯ БЕЗАПАСНАСТИ ГДЕ ЗАПЯТАЯ В ПАРОЛЕ?' }
		if (!rawData.passwordA.includes('*')) return { ok: false, message: 'В ПАРОЛЕ НАДА ЗНАК * ДЛЯ БЕЗАПАСПАНСИЫВАТОПРОЫВПРЫВП' }
		if (!rawData.passwordA.includes('?')) return { ok: false, message: 'в пароле нужен кое какой знак но я не скажу какой' }

		if (!rawData.username) return { ok: false, message: 'АЛО Я СПРАСИЛ ВАПРОС КАК ВАС НАЗВАЛИ' }
		if (!rawData.birthDate) return { ok: false, message: 'ДАТА РАЖДЕНИЯ НУ КАК МОЖНА НЕ ПАНЯТЬ' }

		if (rawData.username !== rawData.username.toLowerCase()) return { ok: false, message: 'бальшые буквы в имене запрещены' }
		if (rawData.username.match(/[a-z]/g)) return { ok: false, message: 'латиница в имени запрещена' }
		if (rawData.username.match(/[0-9]/g)) return { ok: false, message: 'ХТО ТЕБЯ ЦЫФРАМИ НАЗВАЛ?' }

		if (rawData.username.match(/[a-z]/g)) return { ok: false, message: 'КТО ТЕБЯ В ДЕНЬ БУКАВ НАЗВАЛ' }
		if (rawData.username.match(/[а-я]/g)) return { ok: false, message: 'ПОЧЕМУ У ТЕБЯ РУСКИЕ БУКВЫ В ДАТЕ РАЖДЕНИЯ' }

		await prisma.user.create({
			data: {
				username: rawData.username,
				password: rawData.passwordA,
				birthDate: rawData.birthDate
			}
		})

		return { ok: true, message: 'Оо шото получилось ну давай папробуем вайти' }
	}
	return { ok: false, message: 'Ошибка какаято. Ну страницу перезагрузи ещо раз попробуй ну' }
}

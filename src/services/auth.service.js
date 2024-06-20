
const BASE_URL = 'http://localhost:3000/api'

export const register = async (user) => {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error registering user:', error)
        return error.message
    }
}

export const login = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error logging in:', error)
        return error.message
    }
}
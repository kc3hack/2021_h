module.exports = {

	GitHub: {
		clientID: process.env.GITHUB_CLIENT_ID || '$GITHUB_CLIENT_ID',
		clientSecret: process.env.GITHUB_CLIENT_SECRET || '$GITHUB_CLIENT_SECRET',
		callbackURL: process.env.HEROKU_URL ? `process.env.HEROKU_URL/auth/github/callback` : 'http://localhost:8000/auth/github/callback'
	},

	session: {
		secret: '336d2ebdb0acde42'
	}
}

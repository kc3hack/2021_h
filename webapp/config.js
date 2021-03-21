module.exports = {

	GitHub: {
		clientID: '${clientID}',
		clientSecret: '${clientSecret}',
		callbackURL: 'http://localhost:8000/auth/github/callback'
	},

	PostgreSQL: {
		link: 'postgres://postgres:postgres@localhost/chat_app'
	},

	session: {
		secret: '336d2ebdb0acde42'
	}
}

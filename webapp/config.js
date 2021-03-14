module.exports = {

	GitHub: {
		clientID: GITHUB_CLIENT_ID,
		clientSecret: GITHUB_CLIENT_SECRET,
		callbackURL: 'http://localhost:8000/auth/github/callback'
	},

	twitter: {
		consumerKey: '${API key}',
		consumerSecret: '${API secret key}',
		callbackURL: 'http://localhost:8000/oauth_callback'
	},

	ipAddress: 'http://localhost:8000'
}

// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

router.get('/', (req, res) => {

	const data = {
		cdn: process.env.TURBO_CDN,
		greeting: 'Welcome to our Restaurant',
		description: 'A great place for a business meeting or to bring a date! '
	}

	res.render('index', data)

})



module.exports = router

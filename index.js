/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const puppeteer = require('puppeteer')

exports.screenshot = function(request, response) {
	;(async () => {
		const url = request.query.url
		const width = parseInt(request.query.width) || 2400
		const height = parseInt(request.query.height) || 1800
		const fullPage = request.query.full ? request.query.full === 'true' : false

		if (!url) {
			return response.send(`Please provide URL as GET parameter, for example: <a href="?url=https://example.com">?url=https://example.com</a>`)
		}

		const browser = await puppeteer.launch({
			args: ['--no-sandbox'],
		})
		const page = await browser.newPage()

		await page.goto(url, { waitUntil: 'networkidle2' })

		if (!fullPage) {
			await page.setViewport({ width, height })
		}

		const screenshot = await page.screenshot({ fullPage })

		await browser.close()

		return response.type('image/png').send(screenshot)
	})()
}

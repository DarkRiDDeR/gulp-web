
export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			baseDir: `${app.path.build.html}`
		},
		port: 3000,
		open: false,
		notify: false,
		tunnel: false,
		ghostMode: false
	})
}
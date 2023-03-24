import webpack from 'webpack-stream'



export const js = () => {
	let webpackConf = {
		mode: app.isBuild ? 'production' : 'development',
		output: {
			filename: 'app.min.js',
		}
	}
	if ( app.isDev )
		webpackConf = Object.assign( webpackConf, {
			devtool: 'source-map'
		})

	return app.gulp.src(app.path.src.js, { sourcemaps: true })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'JS',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(webpack(webpackConf))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream())
}
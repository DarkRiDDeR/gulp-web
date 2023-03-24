//import { deleteSync } from "del"
import gulpZip from 'gulp-zip'
import dateformat from 'dateformat'

export const zip = () => {
	//deleteSync(`./${app.path.rootDir}.zip`)
	const dt = new Date()
	return app.gulp.src(`${app.path.buildDir}/**/*`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'ZIP',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(gulpZip(app.path.rootDir + '-' + dateformat(dt, 'yyyymmddHHMM') + '.zip'))
		.pipe(app.gulp.dest('./'))
}
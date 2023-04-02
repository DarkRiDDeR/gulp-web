//import fs from 'fs'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

export const fonts = () => {
	return app.gulp.src(`${app.path.src.fonts}/**/*`)
		.pipe(app.gulp.dest(app.path.build.fonts))
}

export const fontOtfToTtf = () => {
	return app.gulp.src(`${app.path.src.fonts}/**/*.otf`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'FONTS',
				message: 'Error: <%= error.message %>'
			})
		))
		// convert to ttf
		.pipe(fonter({
			formats: ['ttf']
		}))
		.pipe(app.gulp.dest(app.path.src.fonts))
}

export const fontTtfToWoff = () => {
	return app.gulp.src(`${app.path.src.fonts}/**/*.ttf`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'FONTS',
				message: 'Error: <%= error.message %>'
			})
		))
		// convert to woff
		.pipe(fonter({
			formats: ['woff']
		}))
		.pipe(app.gulp.dest(app.path.src.fonts))
		.pipe(app.gulp.src(`${app.path.src.fonts}/**/*.ttf`))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.path.src.fonts))
}
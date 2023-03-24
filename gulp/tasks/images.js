import webp from 'gulp-webp'
import { default as imagemin, gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin'

export const images = () => {
	return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'IMAGES',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webp({
					quality: 75
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.images))


		.pipe(app.gulp.src(app.path.src.images))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(
			app.plugins.if(
				app.isBuild,
				imagemin([
					gifsicle({ interlaced: true }),
					mozjpeg({
						quality: 75,
						progressive: true
					}),
					optipng({ 
						optimizationLevel: 3 // 0 to 7
					}),
					svgo({
						plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
					})
				])
		 	)
		 )
		.pipe(app.gulp.dest(app.path.build.images))


		.pipe(app.gulp.src(app.path.src.svg))
		.pipe(app.gulp.dest(app.path.build.images))


		.pipe(app.gulp.src(app.path.src.ico))
		.pipe(app.gulp.dest(app.path.build.images))


		.pipe(app.plugins.browsersync.stream())
}
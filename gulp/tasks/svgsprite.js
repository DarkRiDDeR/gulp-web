import gulpSvgSprite from 'gulp-svg-sprite'

export const svgSprite = () => {
	return app.gulp.src(app.path.src.svgicons)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SVG Sprite',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(gulpSvgSprite({
			mode: {
				css: {
					//dest: './',
					bust: false,
					sprite: '../img/sprite.svg',
					example: true,
					render: {
						css: true // Render a Sass stylesheet
					}
			  	},
				/**stack: {
					sprite: '../icons/icons.svg',
					example: true
				}*/
			}
		}))
		.pipe(app.gulp.dest(app.path.src.svgsprite))
}

export const svgSpriteDist = () => {
	return app.gulp.src(`${app.path.src.svgsprite}/img/sprite.svg`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'SVG Sprite',
				message: 'Error: <%= error.message %>'
			})
		))
		.pipe(app.gulp.dest(app.path.build.images))
}
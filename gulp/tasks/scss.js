import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'
import webpcss from 'gulp-webpcss'
import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import calc from 'postcss-calc'
//import log from 'fancy-log'

const sass = gulpSass(dartSass)

export const scss = () => {
	let postcssPlugins = [
		calc(),
	]
	if ( app.isBuild )
		postcssPlugins = postcssPlugins.concat([
			autoprefixer({
				grid: true,
				overrideBrowserslist: ["last 3 versions"],
				cascade: true
			}),
			cssnano()
		])

	//log('Build:' + app.isBuild)
	//log(postcssPlugins)

	return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber({
			errorHandler:
				app.plugins.notify.onError({
					title: 'SCSS',
					message: 'Error: <%= error.message %>'
				})
		}))
		.pipe(
			app.plugins.if(
				app.isDev,
				sourcemaps.init()
			)
		)
		.pipe(app.plugins.replace(/@img\//g, '../img/'))
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: ['node_modules'],
		}))
		.pipe(postcss(postcssPlugins))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpcss({
					webpcss: '.webp',
					noWebpCss: '.no-webp'
				})
			)
		)
		.pipe(rename({
			extname: '.min.css'
		}))
		.pipe(
			app.plugins.if(
				app.isDev,
				sourcemaps.write('.')
			)
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.browsersync.stream())
}
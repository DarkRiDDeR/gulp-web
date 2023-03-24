import * as nodePath from 'path'

const rootDir = nodePath.basename(nodePath.resolve())
const buildDir = './dist'
const srcDir = './src'

export const path = {
	build: {
		css: `${buildDir}/css/`,
		files: `${buildDir}/files/`,
		fonts: `${buildDir}/fonts/`,
		html: `${buildDir}/`,
		js: `${buildDir}/js/`,
		images: `${buildDir}/img/`,
	},
	src: {
		scss: `${srcDir}/scss/style.scss`,
		files: `${srcDir}/files/**/*`,
		fonts: `${srcDir}/fonts/`,
		html: `${srcDir}/*.html`,
		js: `${srcDir}/js/app.js`,
		images: `${srcDir}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		ico: `${srcDir}/img/**/*.ico`,
		svg: `${srcDir}/img/**/*.svg`,
		svgicons: `${srcDir}/svgicons/**/*.svg`,
		svgsprite: `${srcDir}/svgsprite/`,
	},
	watch: {
		scss: `${srcDir}/scss/**/*.scss`,
		files: `${srcDir}/files/**/*`,
		html: `${srcDir}/**/*.html`,
		js: `${srcDir}/js/**/*.js`,
		images: `${srcDir}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
	},
	clean: buildDir,
	buildDir: buildDir,
	srcDir: srcDir,
	rootDir: rootDir
}

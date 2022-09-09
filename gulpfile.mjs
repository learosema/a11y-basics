import gulp from "gulp";

// Pull in each task
import sass from "./gulp-tasks/sass.mjs";
import fonts from "./gulp-tasks/fonts.mjs";
import images from "./gulp-tasks/images.mjs";
import { esbuild, watchEsbuild } from "./gulp-tasks/esbuild.mjs";

const { parallel, watch } = gulp;

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  watch("./src/scss/**/*.scss", { ignoreInitial: true }, sass);
  watch("./src/images/**/*", { ignoreInitial: true }, images);
  watchEsbuild();
};

const build = parallel(sass, images, fonts, esbuild);

// The default (if someone just runs `gulp`) is to run each task in parrallel
export default build;

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
export { watcher as watch };

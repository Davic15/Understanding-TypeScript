/* Using webpack
    webpack.js.org
    bundle our files together.

    What is webpack?
    Webpack is a bundling & building orchestration tool.

    Normal Setup:
    We have multiple .ts files and many imports (http requests)

    With webpack.
    Code bundles, less imports required.
    Optimized code, less code to download.

    Packages:
    webpack: the tool mentioned above.
    webpack-cli: to run webpack commands.
    webpack-dev-server: server to check.
    typescript: normal TS (normal to install in every project).
    ts-loader: work with webpack, convert TS to JS.
*/
//* template html tag (check what is it later);
import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

new ProjectInput();
new ProjectList('active');
new ProjectList('finished');

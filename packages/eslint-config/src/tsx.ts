import tseslint from 'typescript-eslint';
import addJsx from './add-jsx.js';
import original from './index.js';

export default tseslint.config(...original, ...addJsx);

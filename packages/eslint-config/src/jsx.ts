import tseslint from 'typescript-eslint';
import addJsx from './add-jsx.js';
import untyped from './untyped.js';

export default tseslint.config(...untyped, ...addJsx);

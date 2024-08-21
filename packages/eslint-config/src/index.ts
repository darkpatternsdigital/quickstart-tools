import tseslint from 'typescript-eslint';
import addTyped from './add-typed.js';
import untyped from './untyped.js';

export default tseslint.config(...untyped, ...addTyped);

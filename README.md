# jest-vue-preprocessor-rel-import-bug

> A minimal proof-of-concept of relative import bug

Affects [jest-vue-preprocessor](https://github.com/vire/jest-vue-preprocessor)

## Bug Description
Multiple file components such as `components/HelloWorld/` cannot import files
relatively in `jest` if the script is in a subfolder:
```vue
<script src="./script/index.js"></script>
```
Because inside the script, if we do the following:
```javascript
import { greeter } from './lib/something'
```
Jest will throw the following error looking for `lib/something` because it
looks for the file relative to `index.vue` instead of `script/index.js`.
```
 FAIL  test/unit/specs/HelloWorld.spec.js
  ● Test suite failed to run

    Cannot find module './lib/something' from 'index.vue'
      
      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:191:17)
      at src/components/HelloWorld/index.vue:8:18
      at Object.<anonymous> (src/components/HelloWorld/index.vue:18:3)
```

# Init lerna

```bash
$ npx lerna init && npm install
```

## Creating a new package in workspace named packages
```bash
$ npx lerna create "package-name" -y
```

## Init tsconfig.json
```bash
$ npx tsc --init
```

```
{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "noImplicitAny": false,
    "removeComments": true,
    "noLib": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es2016",
    "sourceMap": true,
    "lib": [
      "es6"
    ],
  },
  "exclude": [
     "node_modules",
      "**/*.spec.ts"
  ]
}
```

## Install typescript
```bash
$ npm install --save-dev typescript @types/node
```

## Compile command
```bash
$ npm run compile
```

## Push to repo
```bash
$ npm run push
```

## Publish on npm registry
```
$ npm run publish
```

## Test command
```bash
$ npm run test
```

## Configuration
* Create src folder in each directory (user-auth, cart, order) where put our source code

* In `./init-lerna/package.json` add script for compiling, testing and publishing on repo
    ```
    {
      "scripts": {
        "compile": "lerna run compile",
        "test": "lerna run test",
        "publish": "lerna publish --no-private",
        "push": "lerna version --conventional-commits --yes"
      }
    }
    ```

* In each package file (user-auth, cart, order) add tsconfig.json that extends the main tsconfig.json
  ```
  {
    "extends": "../../tsconfig.json",
    "compilerOptions": {
      "outDir": "./lib"
    },
    "include": [
      "./src"
    ]
  }
  ```

* In each package.json of each file (user-auth, cart, order) add the compile script command
  ```
  {
     "scripts": {
         "test": "node ./__tests__/*.test.ts",
         "compile": "npx rimraf lib && npx tsc -b"
     }
  }
  ```

## Add dependency between cart and user-auth 
* In ./packages/cart/package.json add user-auth dependency
  ```
  {
     "dependencies": {
         "user-auth": "*"
     }
  }
  ```

## Add dependency between order and user-auth
* In ./packages/order/package.json add user-auth dependency
  ```
  {
     "dependencies": {
         "user-auth": "*"
     }
  }
  ```
  
## Command to see graph dependencies
```bash
$ npx nx graph
```
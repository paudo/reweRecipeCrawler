# Rewe Recipe Crawler
Webcrawler to get Recipes from Rewe as HTML and PDF Document

# Derived from template_node_ts
Template for node projects including configuration for Typescript and eslint 
as well as mocha and chai for testing.

## First steps
Go to the package.json and change the parameters, `name`, `repository->url`,
`bugs->url` and `homepage` according to your new project name and your new
repository.  
After that delete the tsconfig and run `npm install` this will correct the name in the
package-lock.json and install all packages necessary. Do not forget to add the 
package-lock.json back to git!

## Build and Run
`npm run build` compiles the app to js.  
`npm run start` executes the compiled code.  
`npm run serve` runs the app with ts-node.  

## Test
Test should be placed in `./spec` and every test file needs to end with `.spec.ts`.  
`npm run test` will run the tests.  
`npm run lint` runs eslint.

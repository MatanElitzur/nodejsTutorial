# nodejsTutorial

## Course code
https://github.com/jscomplete/ngs

## Usefull links
1. https://nodejs.org/en
2. https://nodejs.org/api/
3. https://nodejs.org/docs/latest/api/
4. Nodejs versions https://node.green/
5. https://www.npmjs.com/ --> This is the default dependency manager
6. https://yarnpkg.com/ --> This is a popular alternative to npm
7. github.com/tc39 --> Ecma script releases
8. https://semver.npmjs.com --> Display all the available versions for a pckage

## NPM (Module Dependency Manager)
1. **npm** --> display all the npm commands and more
2. **npm help install** --> display all npm install command options.
3. **npm -v** --> display version
4. **npm init** --> bootstrap the project and create a basic package.json file
5. **npm init --yes** --> get the defaults of the npm init command
6. **npm i express** --> i is a alias for npm install. install express package 
7. **npm install -g npm** --> update npm version globaly
8. **npm install -g create-react-app** --> create-react-app package in most cases is installed globally. 
9. **npm install --save moment** --> add the moment dependency to the project and the save word will update the version in the package json
10. **npm i <'package_name@4.17>'** --> install this specific version
11. **npm i <'package_name@latest>'** --> install the latest version
12. **npm install** --> add all dependencies configured in the package.json to the project, it will get the same package version mentioed in the package-lock.json
13. **npm i --production** --> install only the packages from dependency section and not from devDependency at package.json
14. **npm i - D nodemon** --> install package nodemon at the devDependencies section in package.json
15. **npm install --save-dev mocha** --> adding the mocha package into the dev dependencies
16. **which npm** --> ouput: /usr/local/opt/node@20/bin/npm
17. **which npx** --> output: /usr/local/opt/node@20/bin/npx
18. **npm login** --> login to your account in npm
19. **npm publish** --> publish your package to your npm account, invoked from your package root folder. 
20. Your package url https://www.npmjs.com/package/matanelitzur-frame-print 
21. **npm run start OR npm start** --> invoke the start command value at the scripts scope in package.json
22. ** npm run <COMMANDD> --loglevel verbose ** --> Execute a command and print the log
23. **npm run check** --> we can't invoke it as npm check cause it is not a npm special command, but it will invoke the value of check script from the package.json
24. **npm help npm-scripts** --> To see the all the npm commands
25. **npm ls** --> Display as a tree all the packages version
26. **npm ls | less** --> Display as a tree all the packages version, **less** - this command is a pager that allows you to view the output one screen at a time
27. **npm uninstall <'package name'>** --> remove the package from node_modules and from package.json
28. **npm show <'package name'> versions** --> display all the package name available versions
29. **npm outdated** --> display the packages that will be outdated
30. **npm update** --> update the packages accordingly to the semantic versioning (^ ~) in the package.json  


## Testing
1. **Mocha** https://mochajs.org/ --> Test framework, mocha cli will invoke the tests
2. **Chai** https://www.chaijs.com/ --> Assertion Library
3. **Sinon** https://sinonjs.org/ --> Framework for Spies, Stubs and Mocks
4. **Istanbul** https://istanbul.js.org/ --> Code coverage

## Packages
1. https://www.npmjs.com/package/pre-commit --> For using github pre commit for all dev team
2.  local hook: For using it locally for a single developer:  
    1.   hooks to execute scrips, for example on each commit, look at ./git/hooks/commit-msg.sample duplicate and rename to file .git/hooks/pre-commit
    2.   chmod +x .git/hooks/pre-commit

# REPL (Read Eval Print Loop)
1. type node in the terminal and press Enter will open a javascript play around
2. ctrl + L --> clear the REPL session
3. type .editor and we get a more feature editor, we can write a lot of lines when finish typing or pashting a code click ctrl + D for REPL to evaluate the code
4. type .help to display all the commands in the REPL
5. type .break command to help you exist a code situation
6. type .load to load a js file --> .load <'filename.js'>
7. type .save <'filename.js'> to save all the code in the REPL into a js file
8. double tap on the Tab key will display all the options, for example type the letter c and then tap on double tab OR will auto complate for example type clu and then type on tab and it will auto complate the command cluster 
   1. Example type Array. and double tap on tab will display all Array. options.
   2. Example const arr = []; --> arr. double tap on tab will display all options
   3. Example tap double tab on an empty line will display all commands
   4. Example type . then double tab, will display all . options

# Usefull brew commands
1. **brew install node** --> install the latest node version
2. **brew install node@20** --> install node version 20
3. **brew upgrade node** --> if you have an older node version

# Usefull Node commands 
1. **which node** --> output: /usr/local/opt/node@20/bin/node
2. **node -v** --> display Node cli version
3. **node -p <'command'>** --> will invoke a command
   1. Example: node -p "os.cpus().length" --> display the number of cores we have on the machine
4. **node -h | less** --> Display a list of commands (FLAGS) that we can use
5. **node --v8-options | less** --> Node displays all the v8 options it supports
6. **node --v8-options | grep "in progress"** --> Node displays all the v8 options it supports that contains the string "in progress"
7. NODE_DEBUG="http" node [script filr to run] will printout debugging messages

# Libraries
1. Immutable.js --> Grants objects immutable
2. **nodeman** --> is a wrapper around node commands so you run it: **nodeman <'file_name.js>'**
   1. this package will restart the server on each file change, this is for development
3. expressjs --> web module https://expressjs.com/
4. koajs --> web module https://koajs.com/
5. sailsgs --> web module https://sailsjs.com/
6. meteor --> web module https://www.meteor.com/
7. pug --> web system templates, support different languages https://pugjs.org/api/getting-started.html
8. handlebars --> web system templates, support different languages https://handlebarsjs.com/
9. ejs --> web system templates, support different languages https://ejs.co/

# package.json
1. **Major.Minor.Patch** --> Breaking Changes . Backward Compatible . Bug Fixes
2. **~ 1.2.3** --> ~ can install the most recent patch versio, in this example equal or grater then 3.
   1.3.0 version will not be used.
3. **^ 1.2.3** --> ^ install the most recent minor version, int this example equal to 2 or grater.
4. **4.16.x** --> install the most recent patch: 4.16.0 ; 4.16.1 ; 4.16.2 ; ... ; 4.17.0 version will not be used.
4. **4.x** --> install the most recent minor: 4.0.0 ; 4.1.0 ; 4.1.1, ; ... ; 5.0.0 version will not be used.
   
# Process
1. check the process on a unix system if they currently run a node process: ps -ef | grep node
2. on each application thats run on node the event loops is working and it is used for synchronize code

# Debugger via chrome browser
node comes with a builtin debugger client https://nodejs.org/api/debugger.html
1. How to debug? 
   1. **node --inspect-brk <'file name>'** it is starting a debugging utility, it is not debugging the file
   2. In your chrome browser chrome://inspect/#devices (Click on the inspect link in the Remote Target section)
   3. a debugger window is opened, you can had and clear breakpoints, step over step into, etc...
   
# ESLint
1. Links
   1. course https://github.com/jamischarles/ps_eslint/tree/master
   2. https://eslint.org/
   3. https://github.com/eslint/eslint/tree/main
2. Commands:
   1. npm install eslint -g --> install eslint globally
   2. eslint -v  --> display version
   3. eslint --> in terminal type eslint to execute it on the root code
   4. eslint <FOLDER_PATH> --> to execute eslint on a specific folder
   5. elsint --init --> to create an eslint configuration file, for creating rules.
   6. eslint --fix <FOLDER_PATH> --> fix the eslint issuess
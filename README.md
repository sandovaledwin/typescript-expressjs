# typescript-expressjs
Typescript seed project for developing a REST API. This project includes the base configuration for developing and running Typescript apps running with ExpressJS.

## Prerequisites
### Install Docker
* [Mac OS X](https://store.docker.com/editions/community/docker-ce-desktop-mac).
* [Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows).

## 1. Clone the project.
After installing the Docker CLI tool, now you're ready to start working with *typescript-expressjs* app.

### 1.1 Clone the repository.
  ```
  git clone https://github.com/sandovaledwin/typescript-expressjs
  ```

### 1.2 Go into the directory.
  ```
  cd typescript-expressjs
  ```

## 2. Creating the Docker Image.
Now, you're ready for creating the new typescript-expressjs Docker Image in your computer.
  ```
  docker build -t typescript-expressjs:8.9.1 .
  ```

## 3. Installing dependencies.
Before to run the project you must install all the node modules dependencies.
```
docker run -it --rm --name backend  -w /app -v $(pwd):/app -p 3000:3000 typescript-expressjs:8.9.1 npm install
```

## 4. Running the project.
```
docker run -it --rm --name backend  -w /app -v $(pwd):/app -p 3000:3000 typescript-expressjs:8.9.1 npm run start
```

## 5. Opening the project.
In order to verify that the project is running ok, you'll need to open the next url in the browser.
```
http://localhost:3000
```  

## 6. Running the Tests.
For running the test cases written in Jasmine Framework, you'll need to type the next command:
```
docker run -it --rm --name backend  -w /app -v $(pwd):/app -p 3000:3000 typescript-expressjs:8.9.1 npm run test
```

## 7. Documentation.
If you want to create the documentation for all the project code, please just type the next command.
```
docker run -it --rm --name backend  -w /app -v $(pwd):/app -p 3000:3000 typescript-expressjs:8.9.1 typedoc --out doc/ src/ --module commonjs
```
## Note. Typescript Warnings
If you find experimentalDecorators Typescript warning messages, please add the next line to your vscode settings. You can read more about it, in the next [link](https://github.com/Microsoft/TypeScript/issues/9335).
```
{ "typescript.tsdk": "node_modules/typescript/lib" }
```
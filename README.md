PoliteJS Demo Project
=====================

This repository contain a _demo project_ for _PoliteJS_.  
It will basically be the _PoliteJS_ documentation and developement blog itself.

> This is a working repository.  
> **it is not an end-user distribution!**


## Project Setup

> In order to run following code you need to **clone both _core_ and _demo_ repositories** to your local machine.  

Cloned repositories **must keep their original names** and to be one beside the other because some _GruntJS_ tasks move files from the _core_ to the _demo_ in order to optimize developement time.

Your local folder configuration should be something like this:

- /politejs
  - core/
  - demo/

Now you can initialize both repositories:

```
// politejs/core
npm install
grunt

// politejs/demo
npm install
```

**NOTE:** running `grunt` from the `/core` repository will deploy a _PoliteJS Core_ dependency package into `/demo/node_modules/grunt-polite`.



## Deploy Locally

To deploy your project to a fully functional website locally run:

```
grunt
```

A `/www` folder is being created and it contains the generated website.  
Double click on the `index.html` file to run your website!




## Deploy to Remote

[[to be created]]




## Authoring Session

If you plan to edit your contents intensively you probably want to avoid to come back to the console to rebuild your website ad every content change!

```
grunt start
```

Above script allow you to edit your `/sources` and have your `/www` always up to date.  
Just refresh the web page!

> If you are working on both _core_ source code and _demo_ contents you probably want to run `grunt start` on both repos to enjoy **a complete automatism in building the `/www`** folder!

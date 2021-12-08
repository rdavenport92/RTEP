# GIC GUI Boilerplate

Boilerplate repo for spinning up GUIs. This project uses React + Typescript for front-end development (/src), Electron for native capabilities (/main), and Python 3 (/engine) to perform business logic.

## Prerequisites

This project requires that you have Node, npm, Python 3 and Poetry (for Python) installed on your machine.

## Getting started

### Installation and Setup

The simplest way to get the project ready for development, once you have completed the prerequisites previously mentioned, is to run `npm run install:all`. You can individually run `npm install` to install dependencies and set up the UI portion of this repo and run `npm run install:engine` to automatically install dependencies and set up the Python engine portion. If you prefer to use Poetry directly to manage the engine, alternatively, you can navigate to the engine directory and run `poetry install` there directly.

### Standing Up the Dev Environment

Once everything is successfully installed, run `npm start` to automatically spin up the Engine, the UI server and the Electron environment respectively. All standard output will be displayed in the same terminal where the script is ran with the standard output being separated and labeled per process. If you prefer to start each component separate from each other, there are a couple of ways to approach it.

To start the engine in isolation:

- Run `npm run start:engine` or navigate to the engine directory and run `poetry run main`.

To start the UI/Electron together (without the Engine):

- Run `npm run start:ui`.

To server the UI in isolation:

- Run `npm run start:web`.

To start the Electron instance in isolation:

- Run `npm run start:main`.

However you decide to approach standing up the environment, you should ensure that each component of the architecture is started in the order of Engine, UI, then Electron.

## Customizing Your Local Dev Environment

This project contains two `example.settings.json` files. The global settings file exists within the top level `.vscode` directory and the other exists within the top level of the `engine` directory. The global configuration applies when developing with the top level set as the workspace. In case you prefer to set the `engine` directory as your workspace during its development, look to its `.vscode` directory to configure the environment. To get started with configuring your settings, create a `settings.json` file within one or both environments and use the `example.settings.json` files for reference. The `example.settings.json` files exist to provide a collection of settings that have been configured by another contributor and only exist as a recommendation for which settings to include in your own configuration.

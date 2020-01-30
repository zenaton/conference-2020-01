<p align="center">
  <a href="https://zenaton.com" target="_blank">
    <img src="https://user-images.githubusercontent.com/36400935/58254828-e5176880-7d6b-11e9-9094-3f46d91faeee.png" target="_blank" />
  </a>
  <br>
  Workflow builder for Developers <br>
  <a href="https://docs.zenaton.com" target="_blank">
    <strong> Explore the docs » </strong>
  </a>
  <br>
  <a href="https://zenaton.com" target="_blank"> Website </a>
    ·
  <a href="https://github.com/zenaton/zenaton-node" target="_blank"> Node.js Library </a>
    ·
  <a href="https://app.zenaton.com/tutorial/node" target="_blank"> Tutorial in Node.js </a> <br>
</p>

# Zenaton examples for Node.js

This repository contains examples of workflows built with Zenaton and presented during our conference in January 2020. 

## Installation

Download this repo

```
git clone https://github.com/zenaton/conference-2020-01.git && cd conference-2020-01
```

then add an .env file

```
cp -n .env.example .env
```

and populate it with your application id and api token found [here](https://app.zenaton.com/api).
Install dependencies

```
yarn
```

### Running on Docker

Simply run

```
docker-compose build; docker-compose up
```

You can check that your agent is running [here](https://app.zenaton.com/agents).

You're all set!

### Running Locally

Then, you need to install the Zenaton agent

```
curl https://install.zenaton.com | sh
```

and start it, and make it listen to your configuration:

```
zenaton start; zenaton listen --env=.env --boot=boot.js
```

You're all set!

_Your workflows will be processed by your worker, so you won't see anything except the stdout and stderr, respectively `zenaton.out` and `zenaton.err`. Look at these files :)_

## Example 1: Use of this.date() helper

```sh
node launch_date.js
```

## Example 2 : Use of this.random() helper

```node
node launch_random.js
```

## Example 3: Example of sequential processing of a child workflow

```node
node launch_parent.js
```

## Example 4: Example of parallel processing of child workflows

```node
node launch_parallel_parent.js
```

## Example 5: Example of versioned workflows

```node
node launch_version.js
```

Uncomment "VersionWorkflow_v1" or "VersionWorkflow_v2" in boot.js file in order use different versions.

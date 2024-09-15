#!/bin/bash

set -e

cd client
npm run start

cd ../api
nodemon index.js
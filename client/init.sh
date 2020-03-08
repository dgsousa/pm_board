#!/bin/bash

cd client/
yarn install --frozen-lockfile && yarn run build && yarn run start
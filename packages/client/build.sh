#!/bin/bash

yarn
yarn webpack
tar czf pm_board.tar.gz build

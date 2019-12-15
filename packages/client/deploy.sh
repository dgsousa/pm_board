#!/bin/bash

tar czf pm_tool.tar.gz build

scp pm_tool.tar.gz danielmooncloud.com:~
rm pm_tool.tar.gz

ssh danielmooncloud.com << 'ENDSSH'
tar xf pm_tool.tar.gz -C /home/dsousa/pm_tool
ENDSSH

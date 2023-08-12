#!/usr/bin/env bash
echo "Script Run" >> /var/log/out.log
echo "RUNTIME: $(date)" >> /var/log/out.log
cd /var/app/current/backend
echo "PWD: $(pwd)" >> /var/log/out.log
ls -l >> /var/log/out.log
echo "" >>  /var/log/out.log
export PYTHONPATH=$PYTHONPATH:/var/app/current/backend/dependencies
echo "" >>  /var/log/out.log
echo "PYPATH: $(echo $PYTHONPATH)" >> /var/log/out.log
python3.11 run.py & >> /var/log/out.log 2>&1
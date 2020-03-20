######################################################################
# Author: Adam Jeniski
# Project: AjetBot
# File: /deploy/deploy.sh
# 
# Deploys the latest version of https://github.com/Ajetski/AjetBot
#
######################################################################

echo "============================================"
echo "Running deployment script"
echo "============================================"
echo ""
echo "============================================"
echo "Killing old node process"
echo ""

node_pid=`pidof node`
kill $node_pid

echo "============================================"
echo "Updating source"
echo "============================================"
echo ""

cd AjetBot
git pull

echo "============================================"
echo "Re-deploying"
echo "============================================"
echo ""
echo "done..."

node src/index.js &

node_pid=`pidof node`

kill $node_pid

cd AjetBot

git pull

node src/index.js &

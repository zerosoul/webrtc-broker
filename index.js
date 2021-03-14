const { PeerServer } = require("peer");

const peerServer = PeerServer({ port: 9009, path: "/ngt", proxied: true });
console.log(peerServer);

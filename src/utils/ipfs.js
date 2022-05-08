class IPFS {
  static cidToUrl(cid) {
    return `https://ipfs.io/ipfs/${cid}`;
  }
}

module.exports = IPFS;
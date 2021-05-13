const PRMToken = artifacts.require("PRMToken");

module.exports = function (deployer) {
  deployer.deploy(PRMToken,1000000);
};

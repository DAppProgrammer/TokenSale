
var PRMToken = artifacts.require('./PRMToken.sol');

contract('PRMToken', function(accounts){
    it('sets the total supply upon deployment', function() {
        return PRMToken.deployed().then((instance) => {
            prmToken = instance;
            return prmToken.totalSupply();
        }).then((totalSupply) => {
            assert.equal(totalSupply.toString(),'1000000','sets the total supply to 1000,000');
        });
    });
});
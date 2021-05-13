var PRMToken = artifacts.require('./PRMToken.sol');

contract('PRMToken', function(accounts){
    var prmToken;

    it('initializes values correctly',() => {
        return PRMToken.deployed().then((instance) => {
            prmToken = instance;
            return prmToken.name();
        }).then((name) => {
            assert.equal(name,'PRM Token','has the correct name');
            return prmToken.symbol();
        }).then((symbol) => {
            assert.equal(symbol,'PRM','has the correct symbol');
            return prmToken.standard();
        }).then((standard) => {
            assert.equal(standard,'PRM Token V 1.0','has the correct version')
        })
    });

    it('allocates total supply upon deployment', function() {

        return PRMToken.deployed().then((instance) => {
            prmToken = instance;
            return prmToken.totalSupply();
        }).then((totalSupply) => {
            assert.equal(totalSupply.toString(),'1000000','sets the total supply to 1000,000');
            return prmToken.balanceOf(accounts[0]);
        }).then(function(adminBalance) {
            assert.equal(adminBalance.toString(),'1000000','assigns total supply to admin');
        });
    });

    
})
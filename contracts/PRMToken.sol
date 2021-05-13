// SPDX-License-Identifier: MIT
pragma solidity ^0.5.1;

contract PRMToken {
    string public name = "PRM Token";
    string public symbol = "PRM";
    string public standard = "PRM Token V 1.0";
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) public {
        totalSupply = _initialSupply;

        //allocate the initial supply to owner
        balanceOf[msg.sender] = _initialSupply;
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        require(balanceOf[msg.sender] >= _value);
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
        emit Transfer(msg.sender, _to, _value);
        return success;
    }
}

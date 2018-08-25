pragma solidity ^0.4.23;

import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract SimpleStorage is Ownable {

  event SetVariable(uint x);
  uint myVariable;

  function set(uint x) public {
    myVariable = x;
    emit SetVariable(x);
  }

  function get() public constant returns (uint) {
    return myVariable;
  }
}
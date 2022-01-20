# 국보 컨트랙트를 테스트 해 보는 node 코드 입니다.

가장 기본적인 테스트를 진행 했습니다. 

유저는 3명으로 했고, 

- 1번 유저가 mint (성공)
- 2번 유저가 mint (성공) 
- 3번 유저가 mint (성공)

- 1번 유저가 refund (성공)
- Pauser가 pause (성공)
- 2번 유저가 refund (실패)
- Pauser가 unpause (성공)
- 2번 유저가 refund (실패)

- Minter가 withdraw (성공)

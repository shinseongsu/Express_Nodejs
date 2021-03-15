# sequelize 와 redis 를 이용한 캐싱

캐싱을 해두면 대용량 데이터를 계속 조회를 하지 않아도 된다.

하지만, 지금 프로젝트에서는 작성 후에만 캐시가 작성이 된다. 수정후에는 변경된 데이터가 나오지 않는다.

> 캐싱은 대용량 데이터이고, 데이터가 변경이 많이 없는 곳에 사용한다.
# Promise, Async await

Promise 만들기..

resolve와 reject를 인자로 가지는 함수.
resolve에서 원하는 변수를 써서 콜백으로 넣는다.


```js
const wait1seconds = new Promise( (resolve, reject) => {
    console.log('시작');
    setTimeout( () => {
         resolve( console.log("1초뒤에 찍습니다!!!"));
     }, 1000);
});

wait1seconds.then((result) => {
    console.log("프라미스 이행완료");
});
```

이처럼 사용하면 "시작" -> "1초뒤에 찍습니다" -> "프라미스 이행완료" 로 콘솔이 찍힙니다.

.then 으로 콜백 지옥에 빠지는 것을 예방할 수 있다.


<br><br>

Async await

둘을 항상 붙어있어야 정상적으로 작동하며 비동기로 실행할 수 있다.

```js
async function getProducts() {
    
    try {
        const product1 = await models.Products.findByPk(2);
        console.log(product1.dataValues.id);
    } catch (err) {
        console.log(err);
    }
};

getProducts();
```

제가 공부했던 CRUD 게시판 예제에서 Products 를 찾는 예제 인데 전보다 빠르고 깔끔하게 코드를 작성할 수 있다.
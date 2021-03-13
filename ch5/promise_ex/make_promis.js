const wait1seconds = new Promise( (resolve, reject) => {
    // console.log('시작');
    // setTimeout( () => {
    //     resolve( console.log("1초뒤에 찍습니다!!!"));
    // }, 1000);
    reject('에레!!');

});

wait1seconds.then((result) => {
    console.log("프라미스 이행완료");
}).catch((err) => {
    console.log(err);
});

// Promise 만들기..

// resolve와 reject를 인자로 가지는 함수.
// resolve에서 원하는 변수를 써서 콜백으로 넣는다.
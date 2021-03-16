# MongoDB

- mongoDB 란 무엇인가

key Value 형태로 저장

```
{
    "name": "여성워커",
    "price": 1200
}
```

- 동적 스키마

1번째 {"name": "여성워커", "Price":1200}
2번째 {"thumbnamil": "abc.png"}



- mongoDB cli 사용해보기

```
use exercise;
```

위 명령어를 사용학게 되면 exercise database 를 사용 한다는 명령어 이다.

```
db.person.insert({ "name": "shinseongsu", "lecture": "nodejs" });
```

위 처럼 json 형식의 insert를 cli의 넣게 되면 name, lecture 데이터가 생긴다.

![insert](Resource/insert.png)
![moongo](Resource/mongo_Campass.png)

<br>
<br>

다중으로 데이터를 넣을려면 이렇게 넣으면 된다.


한번의 데이터 말고 여러개의 데이터를 넣고 싶을 때는 [] 안에 {} 형태를 , 로 여러개 넣는다.

```
db.board.insert([
    {
        "title" : "Hello",
        "content" : "첫번째글입니다.",
        "writer" : "admin",
        "hit" : 2
    },
    {
        "title" : "Hi",
        "content" : "두번째 글입니다.",
        "writer" : "admin",
        "hit" : 23
    },
    {
        "title" : "test",
        "content" : "세번째 글입니다.",
        "writer" : "test",
        "hit" : 10
    }
])
```

![inserts](Resource/mongo_inserts.png)
![mongo](Resource/mongo_Campass1.png)
type Member = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Member = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
회원정보.plusOne(1);
회원정보.changeName();

type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  //  첫 글자 0 제거
  return result;
};

function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  // - 대시 제거
  return parseFloat(result);
  // return 하기 전에 숫자로 변형
}

type 함수타입1 = (a: string) => string;
type 함수타입2 = (a: string) => number;

function 함수(a: string, func1: 함수타입1, func2: 함수타입2) {
  let result = func1(a);
  let result2 = func2(result);
  console.log(result2);
}

함수("010-1111-2222", cutZero, removeDash);

let 제목 = document.querySelector("#title");

if (제목 != null) {
  제목.innerHTML = "반가워요";
}

class User {
  static skill = "js";
  intro = User.skill + "전문가입니다";
}

var 철수 = new User();
console.log(철수); // { intro : "undefined 전문가입니다"}

User.skill = "python";
var 민수 = new User();
console.log(민수);

// class UserNum {
//   private static x = 10;
//   public static y = 20;

//   addOne(a) {
//     this.x += a;
//   }
// }
// UserNum.addOne(3); //이렇게 하면 x가 3 더해져야함
// UserNum.addOne(4); //이렇게 하면 x가 4 더해져야함
// UserNum.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

// let 네모 = new Square(30, 30, "red");
// 네모.draw();
// 네모.draw();
// 네모.draw();
// 네모.draw();

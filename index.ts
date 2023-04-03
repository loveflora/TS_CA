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

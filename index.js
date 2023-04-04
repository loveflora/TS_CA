var 회원정보 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
회원정보.plusOne(1);
회원정보.changeName();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    //  첫 글자 0 제거
    return result;
};
function removeDash(x) {
    var result = x.replace(/-/g, "");
    // - 대시 제거
    return parseFloat(result);
    // return 하기 전에 숫자로 변형
}
function 함수(a, func1, func2) {
    var result = func1(a);
    var result2 = func2(result);
    console.log(result2);
}
함수("010-1111-2222", cutZero, removeDash);
var 제목 = document.querySelector("#title");
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
var User = /** @class */ (function () {
    function User() {
        this.intro = User.skill + "전문가입니다";
    }
    User.skill = "js";
    return User;
}());
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

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

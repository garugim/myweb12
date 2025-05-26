<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>자바스크립트 인사 예제</title>
</head>
<body>
    <h2>이름을 입력해보세요</h2>
    <input type="text" id="nameInput" placeholder="이름">
    <button onclick="sayHello()">인사하기</button>
    <p id="greeting"></p>

    <script>
        function sayHello() {
            const name = document.getElementById("nameInput").value;
            const greetingElement = document.getElementById("greeting");
            if (name.trim() === "") {
                greetingElement.textContent = "이름을 입력해주세요!";
            } else {
                greetingElement.textContent = `안녕하세요, ${name}님!`;
            }
        }
    </script>
</body>
</html>


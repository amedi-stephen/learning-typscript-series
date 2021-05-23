// how we declare types in typescript
var a;
var b;
var c;
var d = [1, 2, 3];
var e = [1, "Write novel", true];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Green"] = 3] = "Green";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
b = "Hello world!";

// Object literal
value = "Vu Anh Tu"
var myString = {
    value: 'polytechnic',
    length: 11,
    toUpperCase: function () {
        return this.value.toUpperCase()
    }
}

// Object constructor function
var MyString = function () {
    this.value = "Polytechnic";
    this.length = 11;
    this.toUpperCase = function () {
        return this.value.toUpperCase()
    }
}

// Tạo đối tượng sinh viên có
// 1. Thuộc tính tên, tuổi, địa chỉ
// 2. Phương thức in ra thông tin sinh viên
// VD: Vũ Anh Tú - 18 - Hà Nội
var sinhvien = {
    name: 'Tran Quang Dat',
    age: 20,
    address: 'Hanoi',
    infomation: function (){
        return this.name.age.address.infomation();
    }
}

var svien = function(){
    this.name = "DatBe";
    this.age = 20;
    this.address = "Hanoi";
    infor = function(){
        return this.name.age.address.infor();
    }
}
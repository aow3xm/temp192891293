
var arrNums = [];
var ketQuaElement = document.querySelector('#ketQua');
var ketQua = ketQuaElement.value;
var inputElement = document.querySelector('#themSo');
document.querySelector('.button-confirm').addEventListener('click', function(){
    arrNums.push(document.querySelector('#themSo').value*1);
    ketQua = `[${arrNums}]`;
    updateKetQua();
})
inputElement
document.querySelector('form.form').addEventListener('submit', function(e){
    e.preventDefault();
})

inputElement.addEventListener('keypress', function(e){
    if(e.key == 'enter')
        document.querySelector('.button-confirm').click;
})

document.querySelector('.item1').addEventListener('click', function(){
    ketQua = `Tổng số dương : ${tongSoDuong()}`;
    updateKetQua();
})

document.querySelector('.item2').addEventListener('click', function(){
    ketQua =`Số dương : ${demSoDuong()}`;
    updateKetQua();
})

document.querySelector('.item3').addEventListener('click', function(){
    (arrNums.length<=0) ? ketQua = 'Không có số trong mảng' :ketQua = `Số nhỏ nhất : ${timSoNhoNhat()}`;
    updateKetQua();
})

document.querySelector('.item4').addEventListener('click', function(){
    if(arrNums.length<=0){
        ketQua = timSoDuongNhoNhat();
    }
    else{
        ketQua = `Số dương nhỏ nhất : ${timSoDuongNhoNhat()}`;
    } 
    updateKetQua();
})
document.querySelector('.item5').addEventListener('click', function(){
    ketQua = `Số chẵn cuối cùng : ${timSoChanCuoiCung()}`;
    updateKetQua();
})
document.querySelector('.item6').addEventListener('click', function(){
    ketQua = `Sắp xếp tăng dần : ${sapXepTangDan()}`;
    updateKetQua();
})
document.querySelector('.item7').addEventListener('click', function(){
    ketQua = doiCho();
    updateKetQua();
})
document.querySelector('.item8').addEventListener('click', function(){
    ketQua = timSoNguyenTo();
    updateKetQua();
})
document.querySelector('.item9').addEventListener('click', function(){
    ketQua = demSoNguyen();
    updateKetQua();
})
document.querySelector('.item10').addEventListener('click', function(){
    ketQua = soSanhAmDuong();
    updateKetQua();
})
function updateKetQua(){
    var event = new Event('input', {
        bubbles: true,
        cancelable: true
    });
    ketQuaElement.value = ketQua;
    ketQuaElement.dispatchEvent(event);
}

function tongSoDuong(){
    var s = 0;
    arrNums.forEach(e=>{
        if(e > 0){
            s+=e;
        }
    })
    return s;
}
function demSoDuong(){
    var s = 0;
    arrNums.forEach(e=>{
        if(e>0){
            s++;
        }
    })
    return s;
}

function timSoNhoNhat(){
    var min = 99999999999;
    arrNums.forEach(e=>{
        if(min >= e){
            min=e;
        }
    })
    return min;
}

function timSoDuongNhoNhat(){
    var min = 9999999999999;
    arrNums.forEach(e=>{
        if(e>0 && min>=e){
            min=e;
        }
    })
    return (min==9999999999999) ? `Không có số dương trong mảng` : min;
}

function timSoChanCuoiCung(){
    var rs = 0;
    arrNums.forEach(e=>{
        if(e%2==0){
            rs=e;
        }
    })
    return rs;
}
 
function sapXepTangDan(){
    var sortedArr = [];
    sortedArr = arrNums.sort((a,b)=>a-b);
   return sortedArr;
}

function kiemTraSoNguyenTo(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function timSoNguyenTo() {
    for (let i = 0; i < arrNums.length; i++) {
        if (kiemTraSoNguyenTo(arrNums[i])) {
            return `Số nguyên tố đầu tiên : ${arrNums[i]}`;
        }
    }
    return `Không có số nguyên tố nào`;
}

function doiCho(){
    var fIndex = Number(prompt('Nhập vị trí đầu tiên : '));
    var sIndex = Number(prompt('Nhập vị trí thứ 2 : '));
    [arrNums[fIndex], arrNums[sIndex]] =  [arrNums[sIndex], arrNums[fIndex]];
    return arrNums;
}
function demSoNguyen(){
    var cnt = 0;
    arrNums.forEach(e=>{
        if(Number.isInteger(e)){
            cnt++;
        }
    })
    return cnt;
}

function soSanhAmDuong(){
    var cntAm = 0;
    var cntDuong = 0;
    arrNums.forEach(e=>{
        if(e<0)
            cntAm++;
        else cntDuong++;
    })
    if(cntAm < cntDuong)
        return `Số âm < Số dương`;
    else if(cntDuong < cntAm)
        return `Số dương < Số âm`;
    else return `Số dương = Số âm`;

}


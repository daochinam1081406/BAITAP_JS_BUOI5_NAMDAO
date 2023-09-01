function tinhdiemthi() {
  var diem1T = document.getElementById("diem1");
  var diem1 = 0;
  if (diem1T.value !== "") diem1 = parseFloat(diem1T.value);

  var diem2T = document.getElementById("diem2");
  var diem2 = 0;
  if (diem2T.value !== "") diem2 = parseFloat(diem2T.value);

  var diem3T = document.getElementById("diem3");
  var diem3 = 0;
  if (diem3T.value !== "") diem3 = parseFloat(diem3T.value);

  var diemchuanT = document.getElementById("diemchuan");
  var diemchuan = 0;
  if (diemchuanT.value !== "") diemchuan = parseFloat(diemchuanT.value);

  var khuvucT = document.getElementById("khuvuc");
  var khuvuc = 0;
  if (khuvucT.value !== "") khuvuc = parseFloat(khuvucT.value);

  var doituongT = document.getElementById("doituong");
  var doituong = 0;
  if (doituongT.value !== "") doituong = parseFloat(doituongT.value);

  console.log(khuvuc, doituong, diemchuan, diem1, diem2, diem3);
  var tongdiem = diem1 + diem2 + diem3 + khuvuc + doituong;
  var ketquatongdiem = "không đạt điểm chuẩn";
  if (tongdiem >= diemchuan) ketquatongdiem = "đạt điểm chuẩn";
  var khongche = "có môn bị khống chế";
  if (diem1 > 0 && diem2 > 0 && diem3 > 0)
    khongche = "điểm các môn điều lớn hơn 0";

  var ketquathi = "THÍ SINH KHÔNG TRÚNG TUYỂN";
  if (tongdiem >= diemchuan && diem1 > 0 && diem2 > 0 && diem3 > 0)
    ketquathi = "THÍ SINH TRÚNG TUYỂN";

  var ketqua = document.getElementById("ketqua");
  if (
    diemchuan > 0 &&
    diemchuan !== "" &&
    diem1T.value !== "" &&
    diem2T.value !== "" &&
    diem3T.value !== ""
  ) {
    ketqua.innerText =
      "=>(Ưu tiên: " +
      khuvuc +
      " + " +
      doituong +
      " + Điểm: " +
      diem1 +
      " + " +
      diem2 +
      " + " +
      diem3 +
      " )=" +
      tongdiem +
      "\n" +
      "=>" +
      khongche +
      "\n" +
      "=>" +
      ketquatongdiem +
      "\n" +
      "=>" +
      ketquathi;
  } else {
    ketqua.innerText = "Vui lòng nhập đầy đủ thông tin và điểm chuẩn lớn hơn 0";
  }
}

function tinhtieuthu() {
  // Lấy giá trị số điện từ trường input
  var ketquatieuthu = document.getElementById("ketquatinhtiendien");
  var hoten = document.getElementById("hoten");
  var thang = document.getElementById("thang").value;
  var nam = document.getElementById("nam").value;
  if (hoten.value === "") {
    ketquatieuthu.innerText = "Vui lòng nhập họ tên";
    return;
  }

  var soDienT = document.getElementById("sodien");
  var soDien = 0;
  if (soDienT.value !== "") soDien = parseFloat(soDienT.value);

  // Quy định giá tiền cho từng khoảng tiêu thụ
  var giaKhoang1 = 500; // 50kw đầu giá 500 VNĐ / kw
  var giaKhoang2 = 650; // 50kw kế tiếp 650 VNĐ / kw
  var giaKhoang3 = 850; // 100kw kế tiếp 850 VNĐ / kw
  var giaKhoang4 = 1100; // 150kw kế tiếp 1100 VNĐ / kw
  var giaKhoang5 = 1300; // Còn lại 1300 VNĐ / kw

  var tongTienDien = 0;
  var giaTriGiaiDoan = [];

  if (soDien <= 50) {
    tongTienDien = soDien * giaKhoang1;
    giaTriGiaiDoan.push(["Giai đoạn 1", soDien, tongTienDien]);
  } else if (soDien <= 100) {
    tongTienDien = 50 * giaKhoang1 + (soDien - 50) * giaKhoang2;
    giaTriGiaiDoan.push(["Giai đoạn 1", 50, 50 * giaKhoang1]);
    giaTriGiaiDoan.push([
      "Giai đoạn 2",
      soDien - 50,
      (soDien - 50) * giaKhoang2,
    ]);
  } else if (soDien <= 200) {
    tongTienDien =
      50 * giaKhoang1 + 50 * giaKhoang2 + (soDien - 100) * giaKhoang3;
    giaTriGiaiDoan.push(["Giai đoạn 1", 50, 50 * giaKhoang1]);
    giaTriGiaiDoan.push(["Giai đoạn 2", 50, 50 * giaKhoang2]);
    giaTriGiaiDoan.push([
      "Giai đoạn 3",
      soDien - 100,
      (soDien - 100) * giaKhoang3,
    ]);
  } else if (soDien <= 350) {
    tongTienDien =
      50 * giaKhoang1 +
      50 * giaKhoang2 +
      100 * giaKhoang3 +
      (soDien - 200) * giaKhoang4;
    giaTriGiaiDoan.push(["Giai đoạn 1", 50, 50 * giaKhoang1]);
    giaTriGiaiDoan.push(["Giai đoạn 2", 50, 50 * giaKhoang2]);
    giaTriGiaiDoan.push(["Giai đoạn 3", 100, 100 * giaKhoang3]);
    giaTriGiaiDoan.push([
      "Giai đoạn 4",
      soDien - 200,
      (soDien - 200) * giaKhoang4,
    ]);
  } else {
    tongTienDien =
      50 * giaKhoang1 +
      50 * giaKhoang2 +
      100 * giaKhoang3 +
      150 * giaKhoang4 +
      (soDien - 350) * giaKhoang5;
    giaTriGiaiDoan.push(["Giai đoạn 1", 50, 50 * giaKhoang1]);
    giaTriGiaiDoan.push(["Giai đoạn 2", 50, 50 * giaKhoang2]);
    giaTriGiaiDoan.push(["Giai đoạn 3", 100, 100 * giaKhoang3]);
    giaTriGiaiDoan.push(["Giai đoạn 4", 150, 150 * giaKhoang4]);
    giaTriGiaiDoan.push([
      "Giai đoạn 5",
      soDien - 350,
      (soDien - 350) * giaKhoang5,
    ]);
  }

  // Hiển thị kết quả tổng tiền điện
  ketquatieuthu.innerText =
    "Số tiền điện cần thanh toán của " +
    hoten.value +
    " tháng " +
    thang +
    " năm " +
    nam +
    ": " +
    tongTienDien +
    " VNĐ";

  // Hiển thị giá trị của từng giai đoạn trong bảng
  var giatritunggiaidoanTable = document.getElementById("giatritunggiaidoan");
  giatritunggiaidoanTable.innerHTML = ""; // Xóa nội dung cũ

  giaTriGiaiDoan.forEach(function (giaiDoan) {
    var row = giatritunggiaidoanTable.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = giaiDoan[0];
    cell2.innerHTML = giaiDoan[1];
    cell3.innerHTML = giaiDoan[2];
  });
}

function tinhthuethunhap() {
  // Lấy giá trị từ các trường input
  var tongThuNhap = parseFloat(document.getElementById("thunhap").value);
  var soNguoiPhuThuoc = parseInt(document.getElementById("songuoi").value);

  // Tính thuế thu nhập cá nhân và hiển thị từng giai đoạn trong bảng
  var giatritunggiaidoanTable = document.getElementById(
    "giatritunggiaidoanthue"
  );
  giatritunggiaidoanTable.innerHTML = ""; // Xóa nội dung cũ

  var thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6; // Đổi về triệu VNĐ
  var giaTriGiaiDoan = [];

  // Các khoảng thuế và thuế suất tương ứng
  var khoangThue = [60, 120, 210, 384, 624, 960];
  var thueSuat = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35];

  for (var i = 0; i < khoangThue.length; i++) {
    if (thuNhapChiuThue <= khoangThue[i]) {
      var thueTungGiaiDoan = thuNhapChiuThue * thueSuat[i];
      giaTriGiaiDoan.push([
        "Giai đoạn " + (i + 1),
        thuNhapChiuThue,
        thueTungGiaiDoan,
      ]);
      break;
    } else {
      var thueTungGiaiDoan = khoangThue[i] * thueSuat[i];
      giaTriGiaiDoan.push([
        "Giai đoạn " + (i + 1),
        khoangThue[i],
        thueTungGiaiDoan,
      ]);
      thuNhapChiuThue -= khoangThue[i];
    }
  }

  // Hiển thị giá trị của từng giai đoạn trong bảng
  giaTriGiaiDoan.forEach(function (giaiDoan) {
    var row = giatritunggiaidoanTable.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = giaiDoan[0];
    cell2.innerHTML = giaiDoan[1].toFixed(2) + " triệu VNĐ"; // Đổi lại triệu VNĐ
    cell3.innerHTML = giaiDoan[2].toFixed(2) + " triệu VNĐ"; // Đổi lại triệu VNĐ
  });

  // Tổng thuế thu nhập cá nhân
  var tongThueThuNhap = giaTriGiaiDoan.reduce(function (total, giaiDoan) {
    return total + giaiDoan[2];
  }, 0);

  // Hiển thị kết quả thuế thu nhập
  document.getElementById("ketquatinhthue").innerText =
    "Tổng thuế thu nhập cá nhân phải trả: " +
    tongThueThuNhap.toFixed(2) +
    " triệu VNĐ";
}

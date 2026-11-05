  const items = {};

/* รายการ Wave 110i */
items.wave110i = {
  id: "wave110i",
  name: "Wave 110i",
  group: "models",
  category: "รุ่น",
  maker: "ประมาณ 109 ซีซี",
  makerLabel: "เครื่องยนต์",
  caption: "รุ่นเริ่มต้นราคา 39,000 บาท",
  description: "Wave 110i เป็นรุ่นเล็กของตระกูล Wave ในไทย ใช้เครื่องยนต์ประมาณ 109 ซีซี ขับง่าย ใช้งานสะดวก เหมาะกับการเดินทางในชีวิตประจำวัน",
  story: "รุ่นปี 2026 เปิดตัวในไทยเมื่อเดือนมกราคม 2026 พร้อมสีและดีไซน์ใหม่ ราคาเริ่มต้น 39,000 บาท ส่วนรุ่นปรับหน้าตาปี 2022 เริ่มใช้ไฟหน้า LED",
  image: "assets/images/collection/b4.png",
  related: ["wave125i", "price"],
};

/* รายการ Wave 125i */
items.wave125i = {
  id: "wave125i",
  name: "Wave 125i",
  group: "models",
  category: "รุ่น",
  maker: "124.89 ซีซี",
  makerLabel: "เครื่องยนต์",
  caption: "แรงกว่าและอุปกรณ์ครบกว่า",
  description: "Wave 125i มีความจุกระบอกสูบ 124.89 ซีซี เป็นรุ่นที่แรงกว่าและมีอุปกรณ์ครบกว่ารุ่น 110i",
  story: "ขับง่าย น้ำหนักเบา และเป็นเกียร์กึ่งอัตโนมัติ จึงเหมาะกับคนที่เพิ่งเริ่มขี่มอเตอร์ไซค์ เบรกหน้าเป็นดิสก์ เบรกหลังเป็นดรัม และไม่มี ABS",
  image: "assets/images/collection/05ThHonda_Wave125i-2022_WingCenter_Color_chart_Red-min-e1673974569725.png",
  related: ["pgmfi", "brakes"],
};

/* รายการ PGM-FI */
items.pgmfi = {
  id: "pgmfi",
  name: "PGM-FI",
  group: "engine",
  category: "เทคโนโลยี",
  maker: "Wave 110i และ 125i",
  makerLabel: "ใช้ใน",
  caption: "หัวฉีดอิเล็กทรอนิกส์ของ Honda",
  description: "PGM-FI คือระบบหัวฉีดอิเล็กทรอนิกส์ของ Honda ที่ควบคุมการจ่ายน้ำมันเชื้อเพลิงให้เหมาะกับการใช้งาน แทนระบบคาร์บูเรเตอร์แบบเดิม",
  story: "Wave 110 ใช้ PGM-FI เป็นมาตรฐานตั้งแต่รุ่นปี 2019 ส่วน Wave 125i ก็ใช้ระบบหัวฉีดเช่นกัน",
  image: "assets/images/collection/ดครื่อง.png",
  related: ["fuel", "led"],
};

/* รายการ Fuel economy */
items.fuel = {
  id: "fuel",
  name: "Fuel economy",
  group: "engine",
  category: "ความประหยัด",
  maker: "สูงสุด 71.4 กม./ลิตร",
  makerLabel: "ตัวเลขที่รายงาน",
  caption: "ประหยัดน้ำมันสำหรับใช้ทุกวัน",
  description: "ข่าวเปิดตัว Wave110 รุ่นปี 2026 ระบุอัตราสิ้นเปลืองน้ำมันเชื้อเพลิงสูงสุดประมาณ 71.4 กม./ลิตร",
  story: "ตัวเลขนี้เป็นค่าสูงสุดตามที่รายงาน การใช้งานจริงอาจต่างไปตามสภาพการขับขี่ น้ำหนักบรรทุก และสภาพถนน",
  image: "assets/images/collection/ดครื่อง.png",
  related: ["wave110i", "wheels"],
};

/* รายการ Brakes */
items.brakes = {
  id: "brakes",
  name: "Brakes",
  group: "safety",
  category: "ความปลอดภัย",
  maker: "ดิสก์หน้า / ดรัมหลัง",
  makerLabel: "ระบบเบรก",
  caption: "มีรุ่นที่ใช้ระบบเบรก CBS",
  description: "Wave 125i ใช้ดิสก์เบรกด้านหน้าและดรัมเบรกด้านหลัง และไม่มี ABS ส่วน Wave110 รุ่นปี 2026 รุ่นที่ใช้ดิสก์เบรกหน้ามีระบบเบรก CBS (Combined Brake System) ด้วย",
  story: "CBS ช่วยกระจายแรงเบรกไปยังล้อหน้าและล้อหลังพร้อมกัน เพื่อเสริมความมั่นใจเวลาเบรก",
  image: "assets/images/collection/ดบรค.png",
  related: ["price", "wave125i"],
};

/* รายการ LED lights */
items.led = {
  id: "led",
  name: "LED lights",
  group: "design",
  category: "ดีไซน์",
  maker: "ไฟหน้า LED",
  makerLabel: "ไฟส่องสว่าง",
  caption: "ไฟหน้า LED พร้อมไฟเลี้ยวดีไซน์ใหม่",
  description: "Wave 110i เริ่มใช้ไฟหน้า LED ในรุ่นปรับหน้าตาปี 2022 และรุ่นปี 2026 ยังมีไฟหน้า LED พร้อมไฟเลี้ยวดีไซน์ใหม่",
  story: "รุ่นปี 2026 ยังมีโลโก้ Emblem แบบนูนที่เพิ่มมิติให้ตัวรถ และมีสีใหม่ให้เลือก",
  image: "assets/images/collection/ไฟหน้า.png",
  related: ["wheels", "fuel"],
};

/* รายการ Wheels */
items.wheels = {
  id: "wheels",
  name: "Wheels",
  group: "design",
  category: "ล้อ",
  maker: "17 นิ้ว",
  makerLabel: "ขนาดล้อ",
  caption: "เลือกได้ทั้งล้อซี่ลวดและล้อแม็ก",
  description: "Wave110 รุ่นปี 2026 มีให้เลือกทั้งล้อซี่ลวดและล้อแม็ก ยางหน้าขนาด 70/90-17 และยางหลังขนาด 80/90-17",
  story: "รุ่น Special Edition แบบล้อแม็กมีวงล้อสีทองแดง (copper) เพิ่มความโดดเด่นให้ตัวรถ",
  image: "assets/images/collection/ล้อ.png",
  related: ["led", "price"],
};

/* รายการ Price & warranty */
items.price = {
  id: "price",
  name: "Price & warranty",
  group: "price",
  category: "ราคา",
  maker: "39,000 บาท",
  makerLabel: "ราคาเริ่มต้น",
  caption: "เช็กกับตัวแทนจำหน่ายก่อนตัดสินใจ",
  description: "Wave110 รุ่นปี 2026 เปิดตัวในไทยด้วยราคาเริ่มต้น 39,000 บาท ราคาจริงขึ้นอยู่กับรุ่นย่อย เช่น ล้อซี่ลวดหรือล้อแม็ก และสตาร์ทเท้าหรือสตาร์ทมือ",
  story: "โดยทั่วไปมีประกัน 2 ปีไม่จำกัดระยะทาง ราคาและเงื่อนไขอาจเปลี่ยนตามช่วงเวลา ควรเช็กกับตัวแทนจำหน่าย Honda อีกครั้งก่อนตัดสินใจ",
  image: "assets/images/collection/allnewwave110i-2026-ราคา.png",
  related: ["brakes", "wave110i"],
};

/* อ่าน id จาก URL */

const itemId =
  new URLSearchParams(window.location.search).get("id") || "wave110i";
const item = Object.hasOwn(items, itemId) ? items[itemId] : null;

/* ฟังก์ชันแสดงข้อมูล */
function showDetail(item) {
  document.title = "Detail | Honda Wave";
  document.querySelectorAll("[data-field]").forEach(function (element) {
    element.textContent = item[element.dataset.field];
  });
  const image = document.querySelector("#detail-image");
  image.src = item.image;
  image.alt = item.name;
}

/* ฟังก์ชันรายการที่เกี่ยวข้อง */
function showRelated(item) {
  item.related.forEach(function (id, index) {
    const related = items[id];
    const suffix = index === 0 ? "" : "-2";
    document.querySelector("#related-link" + suffix).href =
      "detail.html?id=" + id;
    document.querySelector("#related-image" + suffix).src = related.image;
    document.querySelector("#related-name" + suffix).textContent = related.name;
    document.querySelector("#related-caption" + suffix).textContent =
      related.caption;
  });
}

/* เลือกการแสดงผล */

if (item) {
  showDetail(item);
  showRelated(item);
} else {
  document.querySelector("#detail-content").hidden = true;
  document.querySelector("#not-found").hidden = false;
  document.title = "Detail | Honda Wave";
}
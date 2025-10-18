/*ให้เขียนโปรแกรมหน้าเว็บที่มีฟอร์มให้ผู้ใช้เลือก
1. Background Color
2. Font color
2. Font Size (small, medium, large - dropdown) ให้กำหนดตัวเลขแต่ละขนาดด้วยตัวเอง
• เมื่อกดปุ่ม Save ให้บันทึกค่าการตั้งค่าไว้ใน localStorage และเมื่อเปิดหน้าเว็บใหม่ ให้ดึงค่าที่บันทึกไว้มาปรับการแสดงผลของหน้า (เปลี่ยนสีพื้นหลัง/สีอักษร/และขนาดตัวอักษรตามที่เลือก)
• เพิ่มปุ่ม Reset เพื่อล้างค่าทั้งหมดใน localStorage
• Default เป็นพื้นสีขาว และตัวอักษรสีดำ ขนาด font เป็น medium
คำแนะนำเพิ่มเติม:
• ใช้ DOMContentLoaded เพื่อโหลดค่าที่บันทึกไว้มาแสดงและปรับเปลี่ยนค่าตามที่กำหนด
• ใช้ Event Listener กับปุ่ม Save และ Reset */

const bgColor = document.getElementById("bgColor");
const fontColor = document.getElementById("fontColor");
const fontSize = document.getElementById("fontSize");
const saveBtn = document.getElementById("saveBtn");
const resetBtn = document.getElementById("resetBtn");

const DefaultSetting = {
  bgColor: "#ffffff",
  fontColor: "#000000",
  fontSize: "medium"
};

const fontPX = {
  small: "12px",
  medium: "16px",
  large: "20px"
};

function applySetting(setting) {
  document.body.style.backgroundColor = setting.bgColor;
  document.body.style.color = setting.fontColor;
  document.body.style.fontSize = fontPX[setting.fontSize];
}

function loadSetting() {
  const saved = {
    bgColor: localStorage.getItem("bgColor") || DefaultSetting.bgColor,
    fontColor: localStorage.getItem("fontColor") || DefaultSetting.fontColor,
    fontSize: localStorage.getItem("fontSize") || DefaultSetting.fontSize
  };

  bgColor.value = saved.bgColor;
  fontColor.value = saved.fontColor;
  fontSize.value = saved.fontSize;
  applySetting(saved);
}

saveBtn.addEventListener("click", () => {
  localStorage.setItem("bgColor", bgColor.value);
  localStorage.setItem("fontColor", fontColor.value);
  localStorage.setItem("fontSize", fontSize.value);

  const setting = {
    bgColor: bgColor.value,
    fontColor: fontColor.value,
    fontSize: fontSize.value
  };

  applySetting(setting);
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("bgColor");
  localStorage.removeItem("fontColor");
  localStorage.removeItem("fontSize");

  bgColor.value = DefaultSetting.bgColor;
  fontColor.value = DefaultSetting.fontColor;
  fontSize.value = DefaultSetting.fontSize;

  applySetting(DefaultSetting);
});

document.addEventListener("DOMContentLoaded", loadSetting);

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
const bgColor = document.getElementById("bgColor")
const fontColor = document.getElementById("fontColor")
const fontSize = document.getElementById("fontSize")
const saveBtn = document.getElementById("saveBtn")
const resetBtn = document.getElementById("resetBtn")

const DefaultSetting = {
    bgColor : "#ffffff",
    fontColor : "#000000",
    fontSize : "medium"
}


const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ แก้ข้อความจดหมายตรงนี้ได้เลย
const MESSAGE = `

ขอบคุณเวลาที่ทำให้เราได้เจอกัน และรักกัน
แม้อาจเป็นเวลาที่รวดเร็วแต่ก็ทำให้รู้ว่ามันคือความรักที่จริงใจให้กัน
จนครบ 1 ปี ขอบคุณแอ้ที่เป็นทุกอย่างให้โด๋ เพื่อน ที่ปรึกษา
คอยซัพพอร์ตโด๋ในทุกๆเรื่องขอบคุณความรัก ความรู้สึกดีๆที่มีให้เสมอมานะคะ 
แม้อยู่ไกลกันแต่ไม่ได้ทำให้โด๋รู้สึกขาด หรือเหงาเลย แอ้โด้ๆนะคะ 
อยู่กันแบบนี้ตลอดไป รอวันที่ได้อยู่ด้วยกัน
`;

function open(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}
function close(){ modalBackdrop.style.display = "none"; }

openLetter.addEventListener("click", open);
readBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop) close();
});

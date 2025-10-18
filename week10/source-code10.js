// cookie
import { CookieUtil } from "./CookieUtil.js";
CookieUtil.set("cardID", "abc123", new Date(2025, 9, 20))
console.log(document.cookie)
console.log(CookieUtil.get("cardID"))
CookieUtil.unset("cardID")
document.cookie = "theme=dark"
document.cookie = `theme=light;expires=${new Date(2025, 9, 16)}`
document.cookie = "username=amolnut; max-age=60"

//sessionStorage
// let like = sessionStorage.getItem("like")
// if (sessionStorage.getItem("like") === null)
//   sessionStorage.setItem("like", like)
// else sessionStorage.setItem("like", ++like)
// alert(sessionStorage.getItem("like"))

//localStorage
let like = localStorage.getItem("like")
if (like === null) localStorage.setItem("like", 1)
else localStorage.setItem("like", ++like)
alert(localStorage.getItem("like"))
 

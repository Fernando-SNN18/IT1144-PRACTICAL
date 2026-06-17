let txt = localStorage.getItem("txt") || "", cost = parseInt(localStorage.getItem("cost") || 0);
window.onload = () => { if(document.getElementById("summaryBox") && cost > 0) { document.getElementById("summaryBox").style.display = "block"; document.getElementById("lbl-items").innerText = txt; document.getElementById("lbl-subtotal").innerText = "Rs. " + cost; document.getElementById("lbl-total").innerText = "Rs. " + (cost + 350); } };

function addToCart(item) {
  let p = { "Milky Pastel Gel Pens": 450, "Aesthetic Sparkle Stickers": 350, "Dual-Tip Mild Highlighters": 650, "Lavender Mesh Pencil Pouch": 850, "Cloud Grid Sticky Notes": 180, "Magnetic Cloud Bookmarks": 400, "Mini Pastel Desk Drawer": 1200 }[item] || 1250;
  txt += "▪️ " + item + " (Rs. " + p + ")\n"; cost += p;
  localStorage.setItem("txt", txt); localStorage.setItem("cost", cost);
  if (document.getElementById("shop-cart-preview")) document.getElementById("shop-cart-preview").value = txt + "\nTotal Amount: Rs. " + cost;
  alert("🎉 Added to cart!");
}

function handleFormSubmit(e) {
  e.preventDefault(); alert("🛍️ Order Placed!");
  document.getElementById("lbl-name").innerText = document.getElementById("name").value;
  document.getElementById("lbl-email").innerText = document.getElementById("email").value;
  document.getElementById("lbl-phone").innerText = document.getElementById("phone").value;
  document.getElementById("lbl-msg").innerText = document.getElementById("message").value;
  document.getElementById("customer-details-section").style.display = "block";
  localStorage.clear();
}
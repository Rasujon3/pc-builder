function onClickAndUpdatePrice(clickId, itemId, price) {
  document.getElementById(clickId).addEventListener("click", function () {
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;

    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice =
      parseFloat(bestPrice) +
      parseFloat(memoryPrice) +
      parseFloat(storagePrice) +
      parseFloat(deliveryPrice);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
    document.getElementById(clickId).style.backgroundColor = "cornflowerblue";
  });
}

onClickAndUpdatePrice("sixteenGB", "memory-cost", 300);
onClickAndUpdatePrice("eightGB", "memory-cost", 0);
onClickAndUpdatePrice("ssd1", "storage-cost", 0);
onClickAndUpdatePrice("ssd2", "storage-cost", 100);
onClickAndUpdatePrice("ssd3", "storage-cost", 200);
onClickAndUpdatePrice("free-delivery", "delivery-cost", 0);
onClickAndUpdatePrice("paid-delivery", "delivery-cost", 20);

const fakeCode = "pHero";
document.getElementById("apply-btn").addEventListener("click", function () {
  const codeInput = document.getElementById("promo-input");
  let code = codeInput.value;
  console.log("code", code);
  console.log("Coupon code", fakeCode);
  if (code == fakeCode) {
    const totalText = document.getElementById("total-price");
    let totalPrice = parseFloat(totalText.innerText);
    console.log("i am insilde if");
    const discount = (totalPrice * 20) / 100;

    totalPrice = totalPrice - discount;

    totalText.innerText = totalPrice;

    document.getElementById("applied-text").style.display = "block !important";

    // clear input
    codeInput.value = "";
  } else {
    document.getElementById("error-text").style.display = "block !important";
    alert("False Coupon");
    // clear input
    codeInput.value = "";
  }
});

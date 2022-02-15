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
  });
}

onClickAndUpdatePrice("sixteenGB", "memory-cost", 300);
onClickAndUpdatePrice("eightGB", "memory-cost", 0);
onClickAndUpdatePrice("ssd1", "storage-cost", 0);
onClickAndUpdatePrice("ssd2", "storage-cost", 100);
onClickAndUpdatePrice("ssd3", "storage-cost", 200);
onClickAndUpdatePrice("free-delivery", "delivery-cost", 0);
onClickAndUpdatePrice("paid-delivery", "delivery-cost", 20);

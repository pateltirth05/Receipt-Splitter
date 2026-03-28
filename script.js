   
      const bill = document.getElementById("bill");
      const person = document.getElementById("person");
      const tip = document.getElementById("tip");

      bill.addEventListener("input", calculate);
      person.addEventListener("input", calculate);
      tip.addEventListener("input", calculate);

      function calculate() {
        const billValue = Number(bill.value);
        const personValue = Number(person.value);
        const tipValue = Number(tip.value);

        if (!billValue || !personValue) return;

        const tipAmount = billValue * (tipValue / 100);
        const total = billValue + tipAmount;
        const perPerson = total / personValue;

        document.getElementById("tips").textContent =
          "₹" + tipAmount.toFixed(2);
        document.getElementById("total").textContent = "₹" + total.toFixed(2);
        document.getElementById("personbill").textContent =
          "₹" + perPerson.toFixed(2);
      }
    
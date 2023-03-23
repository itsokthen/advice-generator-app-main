const fetchAdvice = async () => {
  const results = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data = await results.json();

  document.getElementById("title").innerHTML = `Advice #${data.slip.id}`;
  document.getElementById("advice").innerHTML = ` "${data.slip.advice}"`;
};

fetchAdvice();

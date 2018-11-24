document.onreadystatechange = () => onReadyStateChange(document.readyState)

function onReadyStateChange(state) {
  let content = document.querySelector('img');

  if (state == 'interactive') {
    content.style.visibility = "hidden";
    document.querySelector(".loaderLayout").style.visibility = "visible";
  } else if (state == 'complete') {
    content.style.visibility = "visible";
    document.querySelector(".loaderLayout").style.visibility = "hidden";
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.message);
});

document.write(
  '<html><head><style type="text/css">h2 {color: red;	font-family:"Arial";} p{line-height:24px;} .green {color: green;} div {background: #064;	color: white;	width: 70%;}</style><title>Deja de procastinar</title></head><body><h1 class="green">Página bloqueada para dejar de procastinar y ser más productivo</h1><h2 id="page">www.facebook.com no te hará más productivo</h2><h4>Toma unos tips</h4><img src="https://i1.wp.com/www.123dinero.com/wp-content/uploads/2018/10/Co%CC%81mo-dejar-de-procrastinar-infografi%CC%81a-410x1024.png?resize=410%2C1024&amp;ssl=1" alt="Procastinar"><script>document.getElementById("page").innerHTML = window.location.host + " no te hará más productivo"</script></body></html>'
);
window.stop();

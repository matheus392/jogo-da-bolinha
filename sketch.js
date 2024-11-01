function setup() {
    createCanvas(400, 400);
   palavra = palavraAleatoria();
  }
  
  function palavraAleatoria(){
   let palavras = ["bem","feliz","inteligente","goleiro"];
    return random(palavras);
  }
    
  function iniciaLizaCores() {
    background(220);
    fill("red");
    textSize(64);
    textAlign(CENTER,CENTER);
  }
  
  function draw() {
    iniciaLizaCores();
    
    let maximo = width
    let minimo = 0;
    let quantidade = map(mouseX,0,width,1,palavra.length)
    let parcial = palavra.substring(0,quantidade);
    text(parcial,200,200);
    }
    
    
    
    /*if(mouseX <50){
      let palavra = "B"
      text(palavra,200,200);
    } else if(mouseX < 100) {
      let palavra = "Be";
      text(palavra,200,200);
    } else if(mouseX < 150) {
      let palavra = "Bem";
      text(palavra,200,200);
  }*/
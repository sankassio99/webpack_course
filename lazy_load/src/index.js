console.log("Normal application");

function createButton() {
    const btn = document.createElement('button');
    btn.innerText = 'Click here to load!';
  
    document.querySelector('body').appendChild(btn);
  
    btn.onclick = (e) => import('./lazy').then(module => {
  
      const lazy = module.default;
  
      lazy();
  
    });
  
  }
  
  createButton();


class Product{
  constructor(value,nombre,precio,cantidad){
    this.value  =  value;
    this.nombre=nombre;
    this.precio=precio;
    this.cantidad=cantidad;
    this.left  = null;
    this.right =  null;
  }

}
class BST {
   constructor(value){
    this.root =  new Product(value);

   }
   add(value){
      let newNode =  new Product(value);
      const searchTree =  node => {
      //if value < node.value, go left
      if(value<node.value){
        if(!node.left) { 
          node.left =  newNode ;
        }
        //if left child, look left again 
        else{
          searchTree(node.left);
        }
      }else if( value > node.value ){
        //if no right child append new node
        if(!node.right){
          node.right = newNode;
        }else{
          searchTree(node.right)
        }
      }
      //iff value > node.value, go right
        
     }
     searchTree(this.root);
   }
   inOrder(){
   //L,R,R
    let result =  [];
    const traverse =  node =>{
    //if left child exist , go left again
      if(node.left) traverse(node.left)
      //capture root node value
      result.push(node.value);
      if(node.right)traverse (node.right)

   }
   traverse(this.root);
   return result;
  
   }
   preOrder(){//root,left,right
      let result = [];
      const traverse  = node =>{
        //push node value first
        result.push(node.value);
        //if left child exist, then go left again
        if(node.left) traverse(node.left)
        //if right child exist, go right again 
        if(node.right) traverse(node.right)
      }



      traverse(this.root);

      return result;
   }
   postOrder(){
    let result = [];
    const traverse  = node =>{

      //if left child exist, then go left again
      if(node.left) traverse(node.left)
      //if right child exist, go right again 
      if(node.right) traverse(node.right)
      //push node value first
      result.push(node.value);
    }
  //APP




    traverse(this.root);
    return result;
 }
fsearch(){
  let result  = [];
  let queue = [];
  queue.push(this.root);
  while(queue.length){
    let currentNOde= queue.shift();
    result.push(currentNOde);
    if(currentNOde.left){
      queue.push(currentNOde.left);

    }
    if(currentNOde.right){
      queue.push(currentNOde.right);

    }
    return result;
  }


}
   }


   //DOM EVENTS
   //app
   const btnAdd = document.getElementById('add')
        btnAdd.addEventListener('click', () => {
            let codigo = Number(document.getElementById('code').value);
            let nombre = document.getElementById('name').value;
            let precio = document.getElementById('price').value;
            let cantidad = document.getElementById('cant').value;

            let nuevo = new Producto(codigo, nombre, cantidad, precio);
            let arbol = new BST;
            arbol.agregar(nuevo);
            let detalles = document.getElementById('detalles');
            detalles.innerHTML =  `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${nuevo.name} -
                    <strong>Price</strong>: ${nuevo.price} - 
                    <strong>Year</strong>: ${product.year}
                </div>
            </div>
        `;

            document.getElementById('code').value = '';
            document.getElementById('cant').value = '';
            document.getElementById('price').value = '';
            document.getElementById('nombre').value = '';

        });
        const BtnListInOrder = document.getElementById('inOrder');
        BtnListInOrder.addEventListener('click', () => {
            let detalles = document.getElementById('detalles');
            arbol.inOrder();
            detalles.innerHTML += arbol.inOrder();
        });
        const BtnListPreOrder = document.getElementById('preOrder');
        BtnListPreOrder.addEventListener('click', () => {
            let detalles = document.getElementById('detalles');
            arbol.PreOrder();
            detalles.innerHTML += arbol.PreOrder() + '<br>';
        });
        const BtnListPosOrder = document.getElementById('postOrder');
        BtnListPosOrder.addEventListener('click', () => {
            let detalles = document.getElementById('detalles');
            arbol.PostOrder();
            detalles.innerHTML += arbol.PostOrder() + '<br>';
        });
      
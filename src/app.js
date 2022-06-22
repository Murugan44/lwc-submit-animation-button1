import { LightningElement } from "lwc";

export default class App extends LightningElement {
  submit(e){
    e.target.classList.add('animating')
    // const btn = this.template.querySelector('.btn')
    //   btn.addEventListener('click', e=>{
    //     e.target.classList.add('animating')
    //   })
  }
}

class CardContent extends HTMLElement{
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* HTML */`
            <div id= 'cardcontent'>
                <h1>HOLA</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi obcaecati molestias itaque expedita iusto excepturi,
                 explicabo optio similique maxime vitae tempora tenetur? At modi id dolore nemo laudantium eos accusantium.</p>
            </div>
        `
    }
}

customElements.define('card-content',CardContent);
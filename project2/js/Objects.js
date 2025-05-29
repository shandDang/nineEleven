class Objects{
    constructor(container, x, y, width, height, bdRadi, url){
        this.container = container;
        this.div = document.createElement("div");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.bdRadi=bdRadi;
        this.url=url;

        //스타일
        this.div.style.position = "absolute";
        this.div.style.left = x +"px";
        this.div.style.top = y +"px";
        this.div.style.width = width +"px";
        this.div.style.height = height + "px";
        this.div.style.backgroundImage = `url(${url})`;
        this.div.style.borderRadius = bdRadi +"px";
        this.div.style.boxSizing = "border-box";

        //박스를 스테이지에 반영
        this.container.appendChild(this.div);
    }
    
    render(){
        this.div.style.left = this.x +"px";
        this.div.style.top = this.y +"px";
    }
}
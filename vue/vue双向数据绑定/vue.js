class Vue{
    constructor(opt){
        this.observer(opt.data)
        let root = document.querySelector(opt.el)
        this.compile(root)
    }

    observer(data){
        this.data = data
        Object.keys(data).forEach(key => {
            data["_"+key] = data[key]
            let observer = new Observer()
            Object.defineProperty(data, key, {
                enumerable: true,
                configurable: true,                
                get (){
                   if(Observer.target){
                       console.log('家了')
                       observer.addSub(Observer.target)
                   }

                   return data["_"+key]
                },

                set(val){
                    data['_'+key] = val
                    observer.publishSub(val)
                }
            })
        })
    }

    compile(root){
        [].slice.call(root.childNodes).forEach(node => {
            console.log(node)
            if(node.nodeType !=1 && /\{\{\s*(.*)\s*\}\}/.test(node.textContent)){
                let key = /\{\{\s*(.*)\s*\}\}/.exec(node.textContent)[1]
                node.textContent = this.data[key]
                Observer.target = node 
                this.data[key]                
                Observer.target = null
            }else {
                this.compile(node)
            }
        })
    }

}

class Observer{
    constructor(){
        this.subNode = []
    }

    addSub(node){
        this.subNode.push(node)
    }
    
    publishSub(val){
        this.subNode.forEach(node => {
            node.textContent = val;
        })
    }
}
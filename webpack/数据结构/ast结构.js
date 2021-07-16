source
import Vue from  'vue'
import App from './app'

new Vue({
  render: h => h(App)
}).$mount('#app')

ast
Node {
  type: 'File',
  start: 0,
  end: 104,
  loc:
   SourceLocation {
     start: Position { line: 1, column: 0 },
     end: Position { line: 7, column: 0 } },
  errors: [],
  program:
   Node {
     type: 'Program',
     start: 0,
     end: 104,
     loc: SourceLocation { start: [Position], end: [Position] },
     sourceType: 'module',
     interpreter: null,
     body: [ [Node], [Node], [Node] ],
     directives: [] },
  comments: [] }



  
source
//
//
//
//
//
//

import $ from 'jquery'

export default {
  data(){
    return {
      initData: 'Vue 开发环境初始化'
    }
  },
  mounted() {
    console.log('测试是否消除console, 在production模式下')
    console.log($("h1").html())
  },
}

ast
Node {
  type: 'File',
  start: 0,
  end: 240,
  loc:
   SourceLocation {
     start: Position { line: 1, column: 0 },
     end: Position { line: 21, column: 0 } },
  errors: [],
  program:
   Node {
     type: 'Program',
     start: 0,
     end: 240,
     loc: SourceLocation { start: [Position], end: [Position] },
     sourceType: 'module',
     interpreter: null,
     body: [ [Node], [Node] ],
     directives: [] },
  comments:
   [ { type: 'CommentLine',
       value: '',
       start: 0,
       end: 2,
       loc: [SourceLocation] },
     { type: 'CommentLine',
       value: '',
       start: 3,
       end: 5,
       loc: [SourceLocation] },
     { type: 'CommentLine',
       value: '',
       start: 6,
       end: 8,
       loc: [SourceLocation] },
     { type: 'CommentLine',
       value: '',
       start: 9,
       end: 11,
       loc: [SourceLocation] },
     { type: 'CommentLine',
       value: '',
       start: 12,
       end: 14,
       loc: [SourceLocation] },
     { type: 'CommentLine',
       value: '',
       start: 15,
       end: 17,
       loc: [SourceLocation] } ] }
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{640:function(t,e,n){"use strict";n.r(e);var l={name:"component-exhibition",components:{"firm-demo0":(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t})({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[[n("div",[n("p",{staticStyle:{margin:"20px 0"}},[n("el-button",{on:{click:function(e){return t.setHei(400)}}},[t._v("设置高度为400")]),t._v(" "),n("el-button",{on:{click:function(e){return t.setHei(600)}}},[t._v("设置高度为600")]),t._v(" "),n("el-button",{on:{click:function(e){return t.setHei(800)}}},[t._v("设置高度为800")]),t._v(" "),n("el-button",{on:{click:function(e){return t.pagingScrollTopLeft(2e3)}}},[t._v("滚动到2千位置")]),t._v(" "),n("el-button",{on:{click:function(e){return t.pagingScrollTopLeft(5e3)}}},[t._v("滚动到5千位置")]),t._v(" "),n("el-button",{on:{click:function(e){return t.pagingScrollTopLeft(0)}}},[t._v("滚动到顶部")]),t._v(" "),n("el-button",{on:{click:t.scrollBottom}},[t._v("滚动到底部位置")])],1),t._v(" "),n("u-table",{ref:"plTable",attrs:{data:t.tableData,height:t.height,"use-virtual":"",showBodyOverflow:"title",showHeaderOverflow:"title","row-height":t.rowHeight,border:""}},[n("u-table-column",{attrs:{type:"index",width:"100",fixed:""}}),t._v(" "),t._l(t.columns,(function(t){return n("u-table-column",{key:t.id,attrs:{resizable:t.resizable,"show-overflow-tooltip":t.showOverflow,prop:t.prop,label:t.label,fixed:t.fixed,width:t.width}})})),t._v(" "),n("u-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"}},[t._v("查看")]),t._v(" "),n("el-button",{attrs:{type:"text",size:"small"}},[t._v("编辑")])]}}])})],2)],1)]],2)},staticRenderFns:[]},{data:function(){return{height:0,rowHeight:55,columns:Array.from({length:20},(function(t,e){return{prop:"address",id:e,label:"地址地址地址地址地址地址地址地址地址地址地址"+e,width:200}})),tableData:Array.from({length:500},(function(t,e){return{id:e+1,date:"2016-05-03",name:1,ab:"欢迎使用u-table",address:"北京市天安门天安门天安门北京市天安门天安门天安门北京市天安门天安门天安门"}}))}},mounted:function(){this.height=500},methods:{setHei:function(t){this.height=t},scrollBottom:function(){this.$refs.plTable.scrollBottom()},pagingScrollTopLeft:function(t){this.$refs.plTable.pagingScrollTopLeft(t,0)}}})}},i=n(34),o=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("p",[t._v("建议开启使用：show-body-overflow 和 show-header-overflow 。")]),n("p",[t._v("（注意：不给height或者不给maxheight，又或者给的是0，use-virtual直接会关闭）。 如果你数据多而且高度为0或者为空，那么就会卡死） 。")]),n("p",[t._v("(如果你需要数据多少表格就多高，自适应，那么就不要给高度，且虚拟滚动会关闭。这个不支持数据量太大的情况哦)")]),n("p",[t._v("（注：启用纵向虚拟滚的后不支持动态行高，如果要支持动态行高，将虚拟滚动关闭即可）。")]),n("p",[t._v("（如果想滚动表格到某个位置你可以调用pagingScrollTopLeft方法。参数可以看文档api哦）。")]),n("div",[t._m(1),n("template",{slot:"source"},[n("firm-demo0")],1),n("template",{slot:"highlight"},[t._m(2)])],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"xu-ni-gun-dong-ji-chu-xu-ni-bu-jie-jue-lie-duo-qing-kuang"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xu-ni-gun-dong-ji-chu-xu-ni-bu-jie-jue-lie-duo-qing-kuang"}},[this._v("¶")]),this._v(" 虚拟滚动(基础虚拟，不解决列多情况)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("当"),e("code",[this._v("u-table")]),this._v("元素中注入"),e("code",[this._v("data")]),this._v("对象数组后，添加use-virtual属性开启虚拟，同时设置row-height行高(它有默认值，请看文档)，同时必须给定height，或者max-height。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{class:"html"}},[this._v('  <template>\n   <div>\n     <p style="margin: 20px 0;">\n          <el-button @click="setHei(400)">设置高度为400</el-button>\n          <el-button @click="setHei(600)">设置高度为600</el-button>\n          <el-button @click="setHei(800)">设置高度为800</el-button>\n          <el-button @click="pagingScrollTopLeft(2000)">滚动到2千位置</el-button>\n          <el-button @click="pagingScrollTopLeft(5000)">滚动到5千位置</el-button>\n          <el-button @click="pagingScrollTopLeft(0)">滚动到顶部</el-button>\n          <el-button @click="scrollBottom">滚动到底部位置</el-button>\n     </p>\n     <u-table\n          ref="plTable"\n          :data="tableData"\n          :height="height"\n          use-virtual\n          showBodyOverflow="title"\n          showHeaderOverflow="title"\n          :row-height="rowHeight"\n          border>\n          <u-table-column type="index" width="100" fixed/>\n          <u-table-column\n             v-for="item in columns"\n             :key="item.id"\n             :resizable="item.resizable"\n             :show-overflow-tooltip="item.showOverflow"\n             :prop="item.prop"\n             :label="item.label"\n             :fixed="item.fixed"\n             :width="item.width"/>\n         <u-table-column\n               fixed="right"\n               label="操作"\n               width="150">\n               <template slot-scope="scope">\n                 <el-button type="text" size="small">查看</el-button>\n                 <el-button type="text" size="small">编辑</el-button>\n               </template>\n             </u-table-column>\n        </u-table>\n    </div>\n </template>\n\n  <script>\n    export default {\n      data() {\n        return {\n          height: 0,\n          rowHeight: 55, // 如果你这里给行高为50，那么你表格行会出现错乱，不要问为啥，因为你可以看看控制台看节点的高是多少，是55，而你这里给50就有问题！\n          columns: Array.from({ length: 20 }, (_, idx) => ({\n              prop: \'address\', id: idx, label: \'地址地址地址地址地址地址地址地址地址地址地址\' + idx, width: 200\n          })),\n         tableData: Array.from({ length: 500 }, (_, idx) => ({\n                id: idx + 1,\n                date: \'2016-05-03\',\n                name: 1,\n                ab: \'欢迎使用u-table\',\n                address: \'北京市天安门天安门天安门北京市天安门天安门天安门北京市天安门天安门天安门\'\n           }))\n        }\n      },\n      mounted () {\n        this.height = 500 // 动态设置高度\n      },\n      methods: {\n        setHei (val) {\n           this.height = val\n        },\n         scrollBottom () {\n            this.$refs.plTable.scrollBottom()\n         },\n        pagingScrollTopLeft (val) {\n            this.$refs.plTable.pagingScrollTopLeft(val, 0)\n        },\n      }\n    }\n  <\/script>\n')])])}],!1,null,null,null);e.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{622:function(n,e,t){"use strict";t.r(e);var r={name:"ux-grid-jsx",data:function(){var n=this,e=this.$createElement;return{tableColumn:[{field:"name",width:100,title:"姓名",slots:{default:function(n){var t=n.row;n.column;return[e("span",{style:"color: red;"},[t.name]),e("span",{style:"color: red;"},["--\x3e>哈哈"])]}}},{field:"sex",title:"性别",slots:{default:function(n){var t=n.row;n.column;return t.sex<5?"太监":[e("span",[t.sex])]},header:function(n){var t=n.column;return[e("p",["我还自定义了你?",e("span",{style:"color: red;"},[t.title])])]}}},{field:"describe",title:"描述",slots:{default:function(n){var t=n.row;n.column;return[e("span",{domProps:{innerHTML:t.describe}})]}}},{field:"age",title:"年龄",slots:{default:function(e,t){var r=e.row;return[t("span",{style:{color:"blue"},on:{click:function(){return n.addressClickEvent(r)}}},r.age+"，->>你点我试试！")]}}}],demo:['<template>\n   <div>\n       <ux-grid border show-overflow ref="plxTable" height="400" :columns="tableColumn"></ux-grid>\n   </div>\n</template>'," export default {\n        name: \"ux-grid-jsx\",\n        data () {\n            return {\n                tableColumn: [\n                    {\n                        field: 'name',\n                        width: 100,\n                        title: '姓名',\n                        slots: {\n                            default: ({ row, column }) => {\n                                return [\n                                    <span style=\"color: red;\">{ row.name }</span>,\n                                    <span style=\"color: red;\">--\x3e>哈哈</span>\n                                ]\n                            }\n                        }\n                    },\n                    {\n                        field: 'sex',\n                        title: '性别',\n                        slots: {\n                            // 自定义内容\n                            default: ({ row, column }) => {\n                                // 不能这样写\n                                //  return row.sex > 5 ? \"太监\" : <span>{ row.sex }</span>\n                                // 你得这样写\n                                return row.sex < 5 ? \"太监\" : [<span>{ row.sex }</span>]\n                            },\n                            // 自定义头部\n                            header: ({ column }) => {\n                                return [\n                                    <p>我还自定义了你?<span style=\"color: red;\">{ column.title }</span></p>\n                              ]\n                            },\n                            // 还可以自定义的呢？有ux-table-column api里面的Scoped Slot属性对象，自己去看吧！\n                        }\n                    },\n                    {\n                        field: 'describe',\n                        title: '描述',\n                        slots: {\n                            default: ({ row, column }) => {\n                                return [\n                                    <span domPropsInnerHTML={ row.describe }></span>\n                                ]\n                            }\n                        }\n                    },\n                    {\n                        field: 'age',\n                        title: '年龄',\n                        slots: {\n                            default: ({ row }, h) => {\n                                // 你还可以返回虚拟dom VNode\n                                return [\n                                    h('span', {\n                                        style: {\n                                            color: 'blue'\n                                        },\n                                        on: {\n                                            click: () => this.addressClickEvent(row)\n                                        }\n                                    }, row.age + '，->>你点我试试！')\n                                ]\n                            }\n                        }\n                    },\n                ]\n            }\n        },\n        mounted () {\n            const data = Array.from({ length: 1000 }, (_, idx) => ({\n                id: idx + 1,\n                name: 'pl' + idx,\n                sex: idx,\n                age: idx,\n                describe: '欢迎使用umy' + idx\n            }))\n            this.datas = data // 知道为啥datas不在 data()方法里面定义吗？嘻嘻\n            this.$refs.plxTable.reloadData(this.datas)\n        },\n        methods: {\n            addressClickEvent (row) {\n                alert('点我干嘛');\n            }\n        }\n    }"]}},mounted:function(){var n=this;setTimeout((function(){var e=Array.from({length:1e3},(function(n,e){return{id:e+1,name:"pl"+e,sex:e,age:e,describe:"欢迎使用umy"+e}}));n.datas=e,n.$refs.plxTable.reloadData(n.datas)}))},methods:{addressClickEvent:function(n){alert("点我干嘛")}}},l=t(34),o=Object(l.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h3",[n._v("jsx自定义模板")]),t("ux-grid",{ref:"plxTable",attrs:{border:"","show-overflow":"",height:"400",columns:n.tableColumn}}),t("pre",[n._v("         "),t("code",[n._v(n._s(n.demo[0]))]),n._v("\n         "),t("code",[n._v(n._s(n.demo[1]))]),n._v("\n     ")])],1)}),[],!1,null,"7bd3ce94",null);e.default=o.exports}}]);
(self.webpackChunkcolumns_landing=self.webpackChunkcolumns_landing||[]).push([[316],{5609:function(e){function n(e){return e?"string"===typeof e?e:e.source:null}function a(e){return function(){for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return a.map((function(e){return n(e)})).join("")}("(?=",e,")")}e.exports=function(e){var n={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},i={className:"meta",begin:/^(>>>|\.\.\.) /},t={className:"subst",begin:/\{/,end:/\}/,keywords:n,illegal:/#/},s={begin:/\{\{/,relevance:0},r={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,i],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,i],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,i,s,t]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,i,s,t]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,s,t]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,s,t]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},l="[0-9](_?[0-9])*",c="(\\b(".concat(l,"))?\\.(").concat(l,")|\\b(").concat(l,")\\."),o={className:"number",relevance:0,variants:[{begin:"(\\b(".concat(l,")|(").concat(c,"))[eE][+-]?(").concat(l,")[jJ]?\\b")},{begin:"(".concat(c,")[jJ]?")},{begin:"\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b"},{begin:"\\b0[bB](_?[01])+[lL]?\\b"},{begin:"\\b0[oO](_?[0-7])+[lL]?\\b"},{begin:"\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b"},{begin:"\\b(".concat(l,")[jJ]\\b")}]},b={className:"comment",begin:a(/# type:/),end:/$/,keywords:n,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},d={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:["self",i,o,r,e.HASH_COMMENT_MODE]}]};return t.contains=[r,o,i],{name:"Python",aliases:["py","gyp","ipython"],keywords:n,illegal:/(<\/|->|\?)|=>/,contains:[i,o,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},r,b,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,d,{begin:/->/,endsWithParent:!0,keywords:n}]},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[o,d,r]}]}}}}]);
//# sourceMappingURL=highlight-python.6b882a83.chunk.js.map
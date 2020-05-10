/*
# 注意事项
* 刷lodash是加深对js的理解
* 刷leetcode是锻炼编程能力
* 不要使用转换为字符串再转回去的办法实现任何函数
* 文档中示例代码及注释不能完全看懂的先别做
* 整条全黄的话会有错误原因的告知，hover查看并修改即可
* 没有更新的话Ctrl+F5强刷即可
* 一般来说如非题目要求，不要修改函数的输入，而是返回新的值，即实现为纯函数

* 用户名不要以数字开头，以数字开头的同学请至github更改用户名，不用重新注册
* 文件名中最好不要包含中划线，如果包含中划线，请将中划线换为下划线然后做为变量名及文件名的前缀
* 文件名(<username>-lodash.js)全小写，用户名与'lodash'之间的分隔符为中划线
* 文件中的变量名全小写: var foobar = {chunk: function(){}}
*/

 var convergentcompletecompact = {
  
    /** Creates an array of elements split into groups the length of size.
     *  @param ary {Array} 为输入的数组
     *  @param size {Number} 为可选参数，是输出数组中每个chunk的长度（末尾不够指定长度的chunk包含剩下的元素）
     *  @returns 一个由chunks组成的新数组
     */
    chunk: function(ary, size = 2) {
        var ary_output = [];
        if (ary === []) return ary_output;
        if (ary.length <= size) return [ary];
       
        for (let i = 0; i < ary.length;) {
            let j = 0, chunk = [];
            while (j < size) {
                chunk.push(ary[i]);
                i++;
                if (i === ary.length) {
                    ary_output.push(chunk);
                    return ary_output;
                }
                j++;
            }
            ary_output.push(chunk);
        }
        return ary_output;
    },

    compact: function(ary) {
        var ary_output = [];
        for (let i = 0; i < ary.length; i++) {
            if (ary[i] === 0 || ary[i] === false || ary[i] === ''
                || ary[i] === null || ary[i] === undefined) {continue}
            if (isNaN(ary[i])) {continue}
            ary_output.push(ary[i]);
        }
        return ary_output;
    },

     /** 过滤掉两个数组的交集
     *  @param ary_check {Array} 为被检查的数组
     *  @param ary_ref {Array} 为参照的数组   
     *  @returns 一个新数组（由被检查数组过滤掉交集后的剩余元素组成）
     */
     difference: function(ary_check, ary_ref) {
         for (let i = 0; i < ary_check.length; i++) {
            for (let k in ary_ref) {
                if (ary_check[i] === ary_ref[k]) {
                    ary_check.splice(i,1);
                    continue;
                }
            }
        }
        return ary_check;
     }, 
  
      /** 切掉一个数组从开始到指定位置的元素
     *  @param ary {Array} 输入数组
     *  @param n {Number} 切除部分结束的下标
     *  @returns 处理后的新数组
     */
     drop: function(ary, n = 1) {
        if (n === 0) return ary;
        if (n >= ary.length) return [];
        var ary_output = [];
        if (n > 0 && n < ary.length) {
            for (let i = n; i < ary.length; i++) {
                ary_output.push(ary[i]);
            }
        }
        return ary_output;
     }, 
  
     /** 切掉一个数组从末尾到指定位置的元素
     *  @param ary {Array} 输入数组
     *  @param n {Number} 切除部分结束的下标
     *  @returns 处理后的新数组
     */
     dropRight: function(ary, n = 1) {
        if (n === 0) return ary;
        if (n >= ary.length) return [];
        var ary_output = [];
        if (n > 0 && n < ary.length) {
            for (let i = 0; i < ary.length - n; i++) {
                ary_output.push(ary[i]);
            }
        }
        return ary_output;
     },

    /** 往数组里填充元素
     *  @param ary {Array} 被填充的数组
     *  @param value 填充的元素的值
     *  @param start {Number} 填充起始位置，include
     *  @param end {Number} 填充结束位置，exclude
     *  @returns 处理后的新数组
     */
     fill: function(ary, value, start = 0, end = ary.length) {
         if (ary === []) return ary;
         var ary_output = [];
         for (let i = 0; i < start; i++) {
             ary_output.push(ary[i]);
         }
         if (end < ary.length) {
             for (let i = start; i < end; i++) { ary_output.push(value);} 
             for (let i = end; i < ary.length; i++) { ary_output.push(ary[i]);} 
         } else {
             for (let i = start; i < ary.length; i++) { ary_output.push(value);}
         }  
         return ary_output;
     },

  
  
  
  
  
  
  
  
  
  
  
 }

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
     difference: function(ary_check, ...values) {
         for (let i = 0; i < ary_check.length; i++) {
            for (let xi of values) {
                for (let j in xi) {
                    if (ary_check[i]=== xi[j]) {
                        ary_check.splice(i,1);
                        continue;
                    }
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
  
     /** 去掉一个数组的元素最外层括号
     *  @param ary {Array} 输入的数组
     *  @returns 返回新的数组
     */
    flatten: function(ary) {
        var ary_output = [];
        for (let i = 0; i < ary.length; i++) {
            if (!Array.isArray(ary[i])) {
                ary_output.push(ary[i])
            } else {
                for (let j = 0; j < ary[i].length; j++) {
                    ary_output.push(ary[i][j])
                }
            }
        }
        return ary_output;
    },
    
    fromPairs: function(ary) {
        var map = {};
        for (let i = 0; i < ary.length; i++) {
            map[ary[i][0]] = ary[i][1];
        }
        return map;
    },

    /** 获取数组的第一个元素 */
    head: function(ary) {
        if (ary === []) return undefined;
        return ary[0];
    },

    /** 
     *  @param ary {Array} 检查的数组
     *  @param value 寻找的value
     *  @param fromIndex {Number} 开始寻找的index
     *  @returns 目标value所在的index，如果找不不到返回-1
     */
     indexOf: function(ary, value, fromIndex = 0) {
        for (let i = fromIndex; i < ary.length; i++) {
            if (ary[i] !== ary[i]) {    //NaN的情况
                if (value !== value) { return i;}
            }
            if (ary[i] === value) { return i;}
        }
           return -1
     },

     //获得一个数组除去最后一个元素的新数组
     initial: function(ary) {
        var ary_output = []; 
        for (let i = 0; i < ary.length - 1; i++) {
            ary_output.push(ary[i]);
         }
         return ary_output;
     },
  
     join: function(ary, separator) {
        var str_output = '';
        for (let i = 0; i < ary.length - 1; i++) {
            str_output = str_output + ary[i] + separator;   //注意字符串拼接，转型
        }
        return str_output + ary[i];
     },

     last: function(ary) {
        return ary[ary.length - 1];
     },

    /** 从右往左找目标值在数组中的下标
     *  @param ary {Array} 检查的数组
     *  @param value 寻找的value
     *  @param fromIndex {Number} 开始寻找的index
     *  @returns 目标value所在的index，如果找不不到返回-1
     */
     lastIndexOf: function(ary, value, fromIndex = ary.length - 1) {
         for (let i = fromIndex; i >= 0; i--) {
             if (ary[i] !== ary[i]) {
                 if (value !== value) return i;
             }
             if (ary[i] === value) return i;
         }
         return -1;
     },
     
     //在原数组上进行反转, ***就地反转***
    reverse(ary) {
        for(let i = 0; i < Math.floor(ary.length / 2); i++) {
            let temp = ary[i] 
            ary[i] = ary[ary.length - 1 - i]
            ary[ary.length - 1 - i] = temp
        }
        return ary
     },

     nth: function(ary, n=0) {
         if (n >= 0) return ary[n];
         return ary[ary.length + n];
     },
  
  
     pull: function(arr, ...values) {
        for (let x of values) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === x) arr.splice(i,1);
            }
        }
        return arr;
     },
  
       pullAll: function(arr, arr_remove) {
         for (let i = 0; i < arr_remove.length; i++) {
             for (let j = 0; j < arr.length; j++) {
                 if (arr_remove[i] === arr[j]) 
                    arr.splice(j, 1)
             }
         }
         return arr
     },

    /** 从右往左找目标值在数组中的下标
     *  @param ary {Array} 检查的数组
     *  @param start {number} 起始位置
     *  @param end {Number} 结束位置，默认末尾，不包含
     *  @returns 目标value所在的index，如果找不不到返回-1
     */
     slice: function(arr, start = 0, end = arr.length){
        var arr_mod = [];
        for (let i = start; i < end; i++) {
            arr_mod.push(arr[i])
        }
        return arr_mod;
     },
  
  
    sortedIndex: function(arr, value)
    {
        var low = 0, hi = arr.length, result = -1;
        while (low <= hi) 
        {   
            let mid = Math.floor((hi - low)/2 + low)          
            if (value === arr[mid]) {    //当数组中存在目标值的情况   
                result = mid;
                hi = mid - 1;
            }      
            else if (value > arr[mid]) 
                low = mid + 1;
            else hi = mid - 1                           
        }
        if (result === -1) 
            return Math.max(low, hi)
        else 
            return result
    },

/** 往数组里填充元素
 *  @param ary {Array} 被填充的数组
 *  @param value 填充的元素的值
 *  @param start {Number} 填充起始位置，include
 *  @param end {Number} 填充结束位置，exclude
 *  @returns 原数组修改后的数组
 */
    fill(ary, value, start = 0, end = ary.length) {
        if (start < 0) {	//当start参数小于0
            start = 0
        }
        if (end > ary.length) {    //当end参数大于ary.length
            end = ary.length
        }
        for(let i = start; i < end; i++) {
            ary[i] = value
        }
        return ary
    },
   
 /** 获取数组的切片
 *  @param ary {Array} 被填充的数组
 *  @param startIdx {Number} 切片的起始位置，inclusive
 *  @param end {Number} 切片结束位置，exclusive
 *  @returns 数组的切片
 */
    slice(ary, start = 0, end = array.length) {
        var ary_slice = []
        for (var i = start; i < end; i++) {
            ary_slice.push(ary[i])
        }
        return ary_slice
    },
     
 /** concate n个数组
 *  @param ary {Array}
 *  @param values {Array} n个参数值组成的数组
 *  @returns 新concatenated数组
 */
    concat(ary, ...values) {
        var concatenated = []
        //将被拼接数组元素放入新数组中
        for(let i = 0; i < ary.length; i++) {
            if( Array.isArray(ary[i]) ) {
                for(let j = 0; j < ary[i].length; j++) {
                    concatenated.push(ary[i][j])
                }
                continue
            }
            concatenated.push(ary[i])
        }
        //将拼接部分放入数组中
        for(let i = 0; i < values.length; i++) {
            if( Array.isArray(values[i]) ) {
                for(let j = 0; j < values[i].length; j++) {
                    concatenated.push(values[i][j])
                }
                continue
            }
            concatenated.push(values[i])
        }
        return concatenated
    },
     
  
  
  
  
  
  
  
  
  
  
 }

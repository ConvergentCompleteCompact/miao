
binarySearch = {
    /**寻找目标值在数组的位置，如果存在返回其下标，否则返回-1
     */
    binarySearch_basic: function(arr, value) 
    {
        var low = 0, hi = arr.length;
        while (low <= hi)   //边界条件, low和hi最终会收敛到一点
        {   //NOTE: 
            //    如果low和hi取值非常大，low+hi可能超过系统能够存储的最大数字如2147483648
            //    更好的办法是用等式左边表达 (hi - low)/2 + low = (low + hi)/2
            let mid = Math.floor((hi - low)/2 + low)          
            if (value < arr[mid]) hi = mid - 1;         //目标值落在[low, mid-1]
            else if (value > arr[mid]) low = mid + 1;   //目标值落在[mid+1, hi]
            else return mid;                           
        }
        return -1
    },

    /**寻找目标值第一次出现在数组的位置, 如果存在返回其下标，否则返回-1
     */
    firstIndexOf: function(arr, value)
    {
        var low = 0, hi = arr.length, result = -1;
        while (low <= hi)
        {   
            let mid = Math.floor((hi - low)/2 + low)          
            if (value === arr[mid]) 
            {    //此时寻找的值可能不是第一次出现的目标值，继续往左搜寻
                result = mid    //保存每次搜索到的目标值的位置，如果左边没有目标值，返回保存位置
                hi = mid - 1    //缩小区间继续往左搜索目标值
            }      
            else if (value > arr[mid]) low = mid + 1;   
            else hi = mid - 1;                           
        }
        return result
    },


    /**寻找目标值最后一次出现在数组的位置, 如果存在返回其下标，否则返回-1
     */
    lastIndexOf: function(arr, value)
    {
        var low = 0, hi = arr.length, result = -1;
        while (low <= hi)
        {   
            let mid = Math.floor((hi - low)/2 + low)          
            if (value === arr[mid]) 
            {    //此时寻找的值可能不是第一次出现的目标值，继续往右搜寻
                result = mid    //保存每次搜索到的目标值的位置，如果右边没有目标值，返回保存位置
                low = mid + 1    //缩小区间继续往左搜索目标值
            }      
            else if (value > arr[mid]) low = mid + 1;   
            else hi = mid - 1;                           
        }
        return result
    },

    /**用二分法实现_.sortedIndex(array, value)函数
     * 
     */
    sortedIndex: function(arr, value)
    {
        var low = 0, hi = arr.length, result = -1;
        while (low <= hi)
        {   
            let mid = Math.floor((hi - low)/2 + low)          
            if (value === arr[mid])    //当数组中存在目标值的情况
            {   
                result = mid;
                hi = mid - 1;
            }      
            else if (value > arr[mid]) 
                low = mid + 1;
            else hi = mid - 1;                           
        }
        if (result === -1) 
            return Math.max(low, hi)
        else 
            return result
    },












































}

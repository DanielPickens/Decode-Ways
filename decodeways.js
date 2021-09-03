 /**
 * @param {string} s
 * @return {number}
 */
    /*
       if (s.length() == 0) return 0;
        if (s.charAt(0) == '0') return 0; //2 basic cases
        
        int[] dp = new int[3]; if (s.length() == 0) return 0;
        if (s.charAt(0) == '0') return 0; // I missed this.
        
        var dp = [0, 0, 0];
        dp[0] = dp[1] = 1;
        let sum = 0, p1 = 0, p2 = 0, p3 = 0;
        for (let i = 1; i < s.length(); ++i) {
            sum  = (s.charAt(i - 1) - '0') * 10 + s.charAt(i) - '0';
            
            p1 = (i - 1) % 3;
            p2 = i % 3;
            p3 = (i + 1) % 3;
            
            if (sum == 10 || sum == 20) dp[p3] = dp[p1];
            else if (sum >= 10 && sum <= 26) dp[p3] = dp[p2] + dp[p1];
            else if (sum % 10 != 0) dp[p3] = dp[p2];
            else return 0;
        }
        
        return dp[p3];
    }
}
*/
    /*
    if (s.isEmpty()) return 0;
   var ct = [s.length() + 1];

    ct[s.length()] = 1;
    ct[s.length() - 1] = s.charAt(s.length() - 1) == '0' ? 0 : 1;

    for (let i = s.length() - 2; i >= 0; i--) {
      var char currLife = s.charAt(i);
       var char prevLife = s.charAt(i + 1);

        if (prev == '0' && (curr == '0' || curr > '2')) return 0;
        if (curr == '0') ct[i] = 0;
        else if (curr > '2' || (curr == '2' && prev > '6'))
            ct[i] = ct[i + 1];
        else
            ct[i] = ct[i + 1] + ct[i + 2];
    }
    return ct[0];
*/






var numDecodings = function(s) {   
    const dp = (function (s) { let a = []; while (s-- > 0)
                    a.push(0); return a; })(s.length + 1);
                dp[0] = 1;
                dp[1] = (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(0)) == '0'.charCodeAt(0) ? 0 : 1;
                for (let i = 2; i <= s.length; i++) {
                    {
                        var num1 = (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(i - 1)) - '0'.charCodeAt(0);
                        var num2 = parseFloat(s.substring(i - 2, i));
                        if (num1 > 0)
                            dp[i] += dp[i - 1];
                        if (num2 > 9 && num2 < 27)
                            dp[i] += dp[i - 2];
                    }
                    ;
                }
                return dp[s.length];
            };

/*
Success
Details 
Runtime: 68 ms, faster than 97.41% of JavaScript online submissions for Decode Ways.
*/

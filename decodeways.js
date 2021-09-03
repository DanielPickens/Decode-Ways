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


        function  kmp(query, pattern) {
            var n = query.length;
            var m = pattern.length;
            var fail =  [...Array(m)].fill(-1);
            for (var i = 1; i < m; ++i) {
                var j = fail[i - 1];
                while (j != -1 && pattern[j + 1] != pattern[i]) {
                    j = fail[j];
                }
                if (pattern[j + 1] == pattern[i]) {
                    fail[i] = j + 1;
                }
            }
            var match = -1;
            for (var i = 1; i < n - 1; ++i) {
                while (match != -1 && pattern[match + 1] != query[i]) {
                    match = fail[match];
                }
                if (pattern[match + 1] == query[i]) {
                    ++match;
                    if (match == m - 1) {
                        return true;
                    }
                }
            }
            return false;
        }
    
        function repeatedSubstringPattern(s) {
            return kmp(s + s, s);
        }
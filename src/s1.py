class Solution:
    def scoreBalance(self, s: str) -> bool:
        total = 0
        partial = set()
        for c in s:
            total += (1 + ord(c) - ord('a'))
            partial.add(total)
        return total / 2 in partial
